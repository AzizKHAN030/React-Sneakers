import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";

import { Row } from "react-bootstrap";
import Card from "../components/Card/Card";
import AppContext from "../context";
import "../index.scss";
import { Link } from "react-router-dom";

export default function Favourites() {
  const { favourites, onAddToCart, onAddToFavourite } =
    React.useContext(AppContext);

  return (
    <div className="content p-20">
      <div className="d-flex align-center justify-between">
        <h1>Избранные</h1>
      </div>
      <Row className="justify-cotent-start">
        {favourites.length > 0 ? (
          favourites.map((item, idx) => (
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
          ))
        ) : (
          <div className="emptyFav">
            <div className="">
              <img src="./img/sad.png" alt="" />
              <h2>Закладок нет &#9785;</h2>
              <p>Вы ничего не добавляли в закладки</p>
              <Link to="/">
                <button className="greenButton">
                  <img src="./img/arrow.svg" alt="" /> Вернуться назад
                </button>
              </Link>
            </div>
          </div>
        )}
      </Row>
    </div>
  );
}
