import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBarCustom from "./components/Navbar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/context/CartContext";
import Form1 from "./Form1";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBarCustom />
        <center>
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              exact
              path="/categoria/:idCate"
              element={<ItemListContainer />}
            />
            <Route
              exact
              path="/detalle/:id"
              element={<ItemDetailContainer />}
            />
            <Route exact path="/carrito" element={<Cart />} />
            <Route
              exact
              path="/form/:idform"
              element={<Form1 />}
            />
          </Routes>
        </center>
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
