import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [isChecked, setIsChecked] = React.useState(false);
  const onClickPlus = () => {
    props.onPlus(props);
    setIsChecked(!isChecked);
    console.log(props);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favourite} onClick={props.onFavourite}>
        <img src="./img/heart_liked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.url} alt="" />
      <h5>{props.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{props.price} сум.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isChecked ? "./img/btn_checked.svg" : "./img/plus.svg"}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
