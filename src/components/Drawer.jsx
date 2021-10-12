import React from "react";
function Drawer(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between align-center">
          Корзина
          <img
            className="removeBtn"
            src="./img/remove_btn.svg"
            alt=""
            onClick={props.onClickClose}
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
              <button className="greenButton">
                Оформить заказ <img src="./img/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img src="./img/cart-empty.png" alt="" />
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className="greenButton" onClick={props.onClickClose}>
              <img src="./img/arrow.svg" alt="" /> Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
