import React from "react";
import Card from "../components/Card/Card";

export default function Favourites({ items, onAddToFavourite }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1>Избранные</h1>
      </div>
      <div className="d-flex flex-wrap">
        {items.map((item, idx) => (
          <Card
            {...item}
            key={idx}
            favourited={true}
            // onPlus={(item) => {
            //   onAddToCart(item);
            // }}
            onFav={(item) => {
              onAddToFavourite(item);
            }}
          />
        ))}
      </div>
    </div>
  );
}
