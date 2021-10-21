import React from "react";
import axios from "axios";
import Home from "./pages/Home";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favourites from "./pages/Favourites";
import Orders from "./pages/Orders";
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
      try {
        const [cartResponse, favouriteResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://615fd603f7254d001706822a.mockapi.io/cart"),
            axios.get("https://615fd603f7254d001706822a.mockapi.io/favourites"),
            axios.get("https://615fd603f7254d001706822a.mockapi.io/items"),
          ]);

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavourites(favouriteResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе");
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (itm) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(itm.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(itm.id))
        );
        await axios.delete(
          `https://615fd603f7254d001706822a.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, itm]);
        const { data } = await axios.post(
          "https://615fd603f7254d001706822a.mockapi.io/cart",
          itm
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return { ...item, id: data.id };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
      console.log(error);
    }
  };
  const onAddToFavourite = async (itm) => {
    try {
      if (
        favourites.find(
          (favObj) => Number(favObj.parentId) === Number(itm.parentId)
        )
      ) {
        axios.delete(
          `https://615fd603f7254d001706822a.mockapi.io/favourites/${
            favourites.find(
              (favObj) => Number(favObj.parentId) === Number(itm.parentId)
            ).id
          }`
        );

        setFavourites((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(itm.parentId))
        );
      } else {
        setFavourites((prev) => [...prev, itm]);
        const { data } = await axios.post(
          "https://615fd603f7254d001706822a.mockapi.io/favourites",
          itm
        );

        setFavourites((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return { ...item, id: data.id };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Не удалось добавить в избранные");
      console.log(error);
    }
  };
  const onRemoveItem = async (itm) => {
    try {
      setCartItems((prev) => [
        ...prev.filter((item, index) => Number(item.id) !== Number(itm.id)),
      ]);
      await axios.delete(
        `https://615fd603f7254d001706822a.mockapi.io/cart/${itm.id}`
      );
    } catch (error) {
      alert("ошибка при удалении");
      console.log(error);
    }
  };
  const onSearchInput = (e) => {
    setSearchVal(e.target.value);
  };
  const onOpenCart = (itm) => {
    setCartOpened(true);
    document.querySelector("html").style = "height:100vh;overflow-y:hidden";
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
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
        <Drawer
          items={cartItems}
          onRemoveItem={onRemoveItem}
          className={cartOpened ? "active" : ""}
        />
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
        <Route exact path="/orders">
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
