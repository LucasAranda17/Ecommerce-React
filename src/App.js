import{BrowserRouter,Routes,Route}from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBarCustom from './components/Navbar/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
    <center>
    <NavBarCustom/>
    <Routes>
      <Route
      exact
       path="/" 
       element={<ItemListContainer/>}
       />
       <Route
       exact
       path="/categoria/:idCate" 
       element={<ItemListContainer/>}
       />
       <Route
       exact
       path="/detalle" 
       element={<ItemDetailContainer />}
       />
        <Route
       exact
       path="/carrito" 
       element={<Cart/>}
       />
    </Routes>
    </center>
    </BrowserRouter>
  );
}

export default App;
