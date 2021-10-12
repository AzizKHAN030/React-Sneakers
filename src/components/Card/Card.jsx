import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";

function Card(props) {
  const [isChecked, setIsChecked] = React.useState(props.checked);
  const [isFavourite, setIsFavourite] = React.useState(props.favourited);

  const onClickPlus = () => {
    props.onPlus(props);
    setIsChecked(!isChecked);
  };
  const onClickFav = () => {
    props.onFav(props);
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.card}>
      {props.loading ? (
        <ContentLoader
          speed={1}
          width={155}
          height={230}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favourite}>
            <img
              onClick={onClickFav}
              src={
                isFavourite
                  ? "./img/heart_liked.svg"
                  : "./img/heart_unliked.png"
              }
              alt="unliked"
            />
          </div>
          <img width="100%" height={135} src={props.url} alt="" />
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
        </>
      )}
    </div>
  );
}

export default Card;
