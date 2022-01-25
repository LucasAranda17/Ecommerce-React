import React, { useContext, useState } from "react";
import "./itemDetail.css";
import Counter from "./Navbar/Counter";
import { Link } from "react-router-dom";
import { CartContext } from "../components/context/CartContext";
import swal from "sweetalert";
const ItemDetail = ({ item }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [goCart, setGoCart] = useState(false);
  const onAdd = (cant) => {
    agregarAlCarrito({ ...item, cant: cant });
    setGoCart(true);
    swal({
      title: "Agregado a Carrito",
      icon: "success",
      button: "Aceptar",
    });
  };
  return (
    <div className="flex">
      <img
        className="imgDetail  animate__animated animate__zoomIn"
        src={`${item.imagen}`}
        alt={`${item.image}`}
      ></img>
      <h3 className="tituloProducto containerRight  animate__animated animate__zoomIn">
        {item.nombre}
      </h3>
      <p className="descripcion containerRight  animate__animated animate__zoomIn">
        {item.descripcion}
      </p>
      {!goCart ? (
        <Counter
          className="contador containerRight  animate__animated animate__zoomIn"
          stock={item.stock}
          onAdd={onAdd}
        />
      ) : (
        <Link
          className="botonCarrito  animate__animated animate__zoomIn"
          to="/carrito"
        >
          Ir al Carrito
        </Link>
      )}
    </div>
  );
};
export default ItemDetail;
