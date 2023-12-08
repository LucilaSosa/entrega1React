import Navbar from "./components/Navbar/Navbar"

import './App.css' //importa la hoja de estilo
import ItemListContainer from "./components/Navbar/ItemListContainer";


function App() {
  
  return (
    <>
    <div id="app">
      <Navbar/>
      <ItemListContainer saludar="Bienvenido/a a mi e-commerce"/>
    </div>
    </>
  );
}

export default App
