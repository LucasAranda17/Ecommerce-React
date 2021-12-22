import React, {useState} from 'react';
import './itemDetail.css';
import Counter from './Navbar/Counter';
import {Link} from 'react-router-dom'
// import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
  const [goCart,setGoCart] = useState(false)

  const {cartList,agregarAlCarrito}= useCartContext()

  const onAdd = ( cantidad )=> {
    console.log(cantidad);
    agregarAlCarrito({...prod,cant:cantidad})
    // setGoCart(true)
  }
    console.log("El item", item);
    return (
      <div className="flex">
        <h3 className="titulo f">ItemDetail</h3>
        <h3 className="tituloProducto f">{item.nombre}</h3>
        <p className="descripcion f">{item.description}</p>
        <img className="imgDetail"src={`${item.imagen}`} alt={`${item.image}`}></img>
        {!goCart ? ( 
        <Counter stock={item.stock} onAdd={onAdd}/>
        ):(
        <Link to="/carrito">Ir al Carrito</Link>
        )}
        
      </div>
    );
  };
  export default ItemDetail;
  