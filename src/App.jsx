import React from "react";
import axios from "axios";
import Home from "./pages/Home";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favourites from "./pages/Favourites";
import { Route } from "react-router";
import AppContext from "./context";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [searchVal, setSearchVal] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const cartResponse = await axios.get(
        "https://615fd603f7254d001706822a.mockapi.io/cart"
      );
      const favouriteResponse = await axios.get(
        "https://615fd603f7254d001706822a.mockapi.io/favourites"
      );
      const itemsResponse = await axios.get(
        "https://615fd603f7254d001706822a.mockapi.io/items"
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavourites(favouriteResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (itm) => {
    if (cartItems.find((item) => Number(item.id) === Number(itm.id))) {
      axios.delete(
        `https://615fd603f7254d001706822a.mockapi.io/cart/${itm.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(itm.id))
      );
    } else {
      axios.post("https://615fd603f7254d001706822a.mockapi.io/cart", itm);
      setCartItems((prev) => [...prev, itm]);
    }
  };
  const onAddToFavourite = async (itm) => {
    try {
      if (favourites.find((favObj) => Number(favObj.id) === Number(itm.id))) {
        axios.delete(
          `https://615fd603f7254d001706822a.mockapi.io/favourites/${itm.id}`
        );
        setFavourites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(itm.id))
        );
      } else {
        const { data } = await axios.post(
          "https://615fd603f7254d001706822a.mockapi.io/favourites",
          itm
        );
        setFavourites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранные");
    }
  };
  const onRemoveItem = (itm) => {
    axios.delete(`https://615fd603f7254d001706822a.mockapi.io/cart/${itm.id}`);
    setCartItems((prev) => [
      ...prev.filter((item, index) => Number(item.id) !== Number(itm.id)),
    ]);
  };
  const onSearchInput = (e) => {
    setSearchVal(e.target.value);
  };
  const onOpenCart = (itm) => {
    setCartOpened(true);
    document.querySelector("html").style = "height:100vh;overflow-y:hidden";
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favourites,
        onAddToCart,
        onAddToFavourite,
        isItemAdded,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onRemoveItem={onRemoveItem} />}
        <Header onClickCart={onOpenCart} />

        <Route exact path="/">
          <Home
            items={items}
            searchVal={searchVal}
            setSearchVal={setSearchVal}
            onSearchInput={onSearchInput}
            onAddToCart={onAddToCart}
            cartItems={cartItems}
            onAddToFavourite={onAddToFavourite}
            isLoading={isLoading}
          />
        </Route>
        <Route exact path="/favourites">
          <Favourites />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
