import React from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";

export default function Favourites() {
  const { favourites, onAddToCart, onAddToFavourite } =
    React.useContext(AppContext);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1>Избранные</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favourites.map((item, idx) => (
          <Card
            {...item}
            key={idx}
            favourited={true}
            onPlus={(item) => {
              onAddToCart(item);
            }}
            onFav={(item) => {
              onAddToFavourite(item);
            }}
          />
        ))}
      </div>
    </div>
  );
}
