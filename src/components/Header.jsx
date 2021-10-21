import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
function Header(props) {
  const { totalPrice } = useCart();
  return (
    <header className="d-flex justify-between">
      <Link to="/">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="./img/image4.png" alt="" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight d-flex align-center">
        <li className="mr-20 d-flex cu-p" onClick={props.onClickCart}>
          <img height={18} width={18} src="./img/cart.svg" alt="" />
          <span>{totalPrice} сум.</span>
        </li>
        <Link to="/favourites">
          <li className="d-flex align-center justify-center cu-p">
            <img height={18} src="./img/favourite.png" alt="" />
          </li>
        </Link>
        <Link to="/orders">
          <li className="d-flex align-center">
            <img height={18} width={18} src="./img/user.svg" alt="" />
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
