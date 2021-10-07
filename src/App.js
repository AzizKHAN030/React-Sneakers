import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer"

const arr = [
  {name:'Мужские Кроссовки Nike Blazer Mid Suede',price:12999,url:'./img/sneakers/1.jpg',key:2},
  {name:'Мужские Кроссовки Nike Air Max 270',price:13500,url:'./img/sneakers/2.jpg',key:1},
  {name:'Мужские Кроссовки Nike Blazer Mid Suede',price:12000,url:'./img/sneakers/3.jpg',key:3},
  {name:'Кроссовки Puma X Aka Boku Future Rider',price:12000,url:'./img/sneakers/4.jpg',key:4},
]

function App() {
  return (
    <div className="wrapper clear">
     <Header/>
     
        <Drawer />
     
    <div className="content p-40">
       <div className="d-flex align-center justify-between">
       <h1>Все кроссовки</h1>
       <div className = "search-block">
         <img src="./img/search_ico.svg" alt="Search" />
         <input type="text"  placeholder="Поиск..."/>
       </div>
       </div>
      <div className='d-flex flex-wrap'>
        {arr.map((obj)=>(
           <Card {...obj} onClick={()=>{console.log(obj);}}/>
        ))}

      </div>
      
      </div>
     
    </div>
  );
}

export default App;
