import React from "react";
import axios from "axios";

import AppContext from "../context";
import Info from "./Info";

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

function Drawer(props) {
  const { setCartOpened, setCartItems, cartItems } =
    React.useContext(AppContext);
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://615fd603f7254d001706822a.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://615fd603f7254d001706822a.mockapi.io/cart/${item.id}`
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Произошла ошибка заказа");
    }
    setIsLoading(false);
  };
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between align-center">
          Корзина
          <img
            className="removeBtn"
            src="./img/remove_btn.svg"
            alt=""
            onClick={() => {
              setCartOpened(false);
              document.querySelector("html").style = "";
            }}
          />
        </h2>

        {props.items.length > 0 ? (
          <div className="itemsWrapper">
            <div className="items">
              {props.items.map((item, idx) => {
                return (
                  <div className="cartItem d-flex align-center" key={idx}>
                    <div
                      className="cartItemImg"
                      style={{ backgroundImage: `url(${item.url})` }}
                    ></div>
                    <div className="mr-20 d-flex flex-column">
                      <p className="mb-5">{item.name}</p>
                      <b>{item.price} сум.</b>
                    </div>
                    <img
                      className="removeBtn"
                      src="./img/remove_btn.svg"
                      alt=""
                      onClick={() => {
                        props.onRemoveItem(item);
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 сум.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 сум</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                className="greenButton"
                onClick={onClickOrder}
              >
                Оформить заказ <img src="./img/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            img={isOrderCompleted ? "./img/order.png" : "./img/cart-empty.png"}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
