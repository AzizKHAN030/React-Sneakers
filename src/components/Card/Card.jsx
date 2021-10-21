import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";

function Card(props) {
  const { isItemAdded, favourites } = React.useContext(AppContext);
  const [isFavourite, setIsFavourite] = React.useState(props.favourited);
  const obj = { ...props, parentId: props.id };
  const onClickPlus = () => {
    props.onPlus(obj);
  };
  const onClickFav = () => {
    props.onFav(obj);
    setIsFavourite(!isFavourite);
  };
  return (
    <div className={styles.card}>
      {obj.loading ? (
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
            {obj.onFav && (
              <img
                onClick={onClickFav}
                src={
                  props.favourited
                    ? "./img/heart_liked.svg"
                    : favourites.some(
                        (item) => Number(item.parentId) === Number(obj.parentId)
                      )
                    ? "./img/heart_liked.svg"
                    : "./img/heart_unliked.png"
                }
                alt="unliked"
              />
            )}
          </div>
          <img width="100%" height={135} src={props.url} alt="" />
          <h5>{obj.name}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>{obj.price} сум.</b>
            </div>
            {obj.onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(obj.id)
                    ? "./img/btn_checked.svg"
                    : "./img/plus.svg"
                }
                alt=""
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
