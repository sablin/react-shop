  
  import Card from "./components/card/Card";
import Drawer from "./components/drawer/Drawer";
  import Header from "./components/header/Header";
  
  function App() {
  return (
    <div className="wrapper clear">
      
   <Drawer />

    <Header />
     
      <main className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>Все кроссовки</h1>
        <div className="d-flex search-block">
          <img src="/img/search.svg" alt="Search" />
          <input type="text" placeholder="Поиск..." />
        </div>
        </div>
  

      <div className="d-flex">
    <Card />
   
      
   
      </div>
 
      </main>

    </div>
  );
}

export default App;
