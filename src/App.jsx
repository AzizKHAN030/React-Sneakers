import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchVal, setSearchVal] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  React.useEffect(() => {
    axios
      .get("https://615fd603f7254d001706822a.mockapi.io/items")
      .then((response) => {
        setItems(response.data);
      });

    axios
      .get("https://615fd603f7254d001706822a.mockapi.io/cart")
      .then((response) => {
        setCartItems(response.data);
      });
  }, []);

  const onAddToCart = (itm) => {
    axios.post("https://615fd603f7254d001706822a.mockapi.io/cart", itm);
    setCartItems((prev) => [...prev, itm]);
    console.log(cartItems);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://615fd603f7254d001706822a.mockapi.io/cart/${id}`);
    setCartItems((prev) => [...prev.filter((item) => item.id !== id)]);
    console.log(id);
  };

  const onSearchInput = (e) => {
    setSearchVal(e.target.value);
    console.log(searchVal);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClickClose={() => {
            setCartOpened(false);
          }}
          onRemoveItem={onRemoveItem}
          // onRemove={(item) => {
          //   setCartItems((prev) => [...prev.filter((el) => el !== item)]);
          // }}
        />
      )}
      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
      />

      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1>{searchVal ? `Поиск по: "${searchVal}"` : "Все кроссовки"}</h1>
          <div className="search-block">
            <img src="./img/search_ico.svg" alt="Search" />
            {searchVal && (
              <img
                className="clear"
                src="./img/remove_btn.svg"
                alt=""
                onClick={() => {
                  setSearchVal("");
                }}
              />
            )}
            <input
              type="text"
              onChange={onSearchInput}
              value={searchVal}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchVal.toLowerCase())
            )
            .map((item, idx) => (
              <Card
                {...item}
                key={idx}
                onPlus={(item) => {
                  onAddToCart(item);
                }}
                onFavourite={() => {
                  console.log("Вы добавили в избранные");
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
