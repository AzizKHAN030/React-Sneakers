import React from "react";
import AppContext from "../context";
const Info = ({ title, description, img }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        className="greenButton"
        onClick={() => {
          setCartOpened(false);
          document.querySelector("html").style = "";
        }}
      >
        <img src="./img/arrow.svg" alt="" /> Вернуться назад
      </button>
    </div>
  );
};

export default Info;
