import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  React.useEffect(() => {
    fetch("https://615fd603f7254d001706822a.mockapi.io/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClickClose={() => {
            setCartOpened(false);
          }}
          onRemove={(item) => {
            setCartItems((prev) => [...prev.filter((el) => el !== item)]);
          }}
        />
      )}
      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
      />

      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="./img/search_ico.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item, idx) => (
            <Card
              {...item}
              key={idx}
              onPlus={() => {
                !cartItems.includes(item)
                  ? setCartItems((prev) => [...prev, item])
                  : setCartItems((prev) => [
                      ...prev.filter((el) => el !== item),
                    ]);
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
