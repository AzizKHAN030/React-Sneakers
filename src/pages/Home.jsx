import React from "react";
import Card from "../components/Card/Card";

function Home({
  items,
  searchVal,
  cartItems,
  setSearchVal,
  onSearchInput,
  onAddToCart,
  onAddToFavourite,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchVal.toLowerCase())
    );

    return (isLoading ? [...Array(12)] : filteredItems).map((item, idx) => (
      <Card
        {...item}
        key={idx}
        loading={isLoading}
        onPlus={(item) => {
          onAddToCart(item);
        }}
        onFav={(item) => {
          onAddToFavourite(item);
        }}
      />
    ));
  };

  return (
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
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
