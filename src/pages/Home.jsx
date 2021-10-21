import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Row } from "react-bootstrap";
import Card from "../components/Card/Card";
import Slider from "../components/Slider/Slider";

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
    <Row className="justify-between p-20">
      <div className="content">
        <div className="d-flex align-center justify-between titleBlock">
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
        <Slider />
        <Row className="justify-content-sm-center justify-content-md-start">
          {renderItems()}
        </Row>
      </div>
    </Row>
  );
}

export default Home;
