function Drawer(){
    return(
        <div className="overlay" style={{display:"none"}}>
        <div className="drawer">
         
<h2 className="d-flex justify-between align-center">Корзина  <img className="removeBtn" src="./img/remove_btn.svg" alt="" /></h2>

<div className="items">
<div className="cartItem d-flex align-center">
  <div className="cartItemImg" style={{backgroundImage:'url(./img/sneakers/2.jpg)'}}>    </div>
   <div className="mr-20 d-flex flex-column">
       <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
       <b>12 999 руб.</b>
   </div>
   <img className="removeBtn" src="./img/remove_btn.svg" alt="" />
</div>

<div className="cartItem d-flex align-center">
  <div className="cartItemImg" style={{backgroundImage:'url(./img/sneakers/1.jpg)'}}>    </div>
   <div className="mr-20 d-flex flex-column">
       <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
       <b>12 999 руб.</b>
   </div>
   <img className="removeBtn" src="./img/remove_btn.svg" alt="" />
</div>

<div className="cartItem d-flex align-center">
  <div className="cartItemImg" style={{backgroundImage:'url(./img/sneakers/1.jpg)'}}>    </div>
   <div className="mr-20 d-flex flex-column">
       <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
       <b>12 999 руб.</b>
   </div>
   <img className="removeBtn" src="./img/remove_btn.svg" alt="" />
</div>

</div>
<div className="cartTotalBlock">
<ul >
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
<button className="greenButton">Оформить заказ <img src="./img/arrow.svg" alt="" /></button>
</div>

</div>
</div>

    )
}

export default Drawer;