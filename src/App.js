import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer"

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
        <Card/>
        <Card/>
        <Card/>

      </div>
      
      </div>
     
    </div>
  );
}

export default App;
