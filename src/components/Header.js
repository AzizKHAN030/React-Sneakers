function Header(){
    return(
        <header className="d-flex justify-between p-40">
        <div className = "headerLeft d-flex align-center">
         <img width={40} height={40} src="./img/image4.png" alt="" /> 
         <div className = "headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
         </div>
        </div>
        <ul className="headerRight d-flex align-center">
          <li className="mr-30 d-flex">
          <img height={18} width={18} src="./img/cart.svg" alt="" />
          <span>1205 сум.</span>
          </li>
          <li className="d-flex align-center">
           <img height={18} width={18} src="./img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      
    )
}

export default Header;