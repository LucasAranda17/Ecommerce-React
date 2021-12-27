import React, {useState} from 'react';
import './itemDetail.css';
import Counter from './Navbar/Counter';
import {Link} from 'react-router-dom'
import { useCartContext } from './context/CartContext';

const ItemDetail = ({ item }) => {
  const [goCart,setGoCart] = useState(false)

  const {agregarAlCarrito}= useCartContext()

  const onAdd = ( cantidad )=> {
    console.log(cantidad);
    agregarAlCarrito({...item,cant:cantidad})
    setGoCart(true)
  }
    console.log("El item", item);
    return (
      <div className="flex">
        <img className="imgDetail"src={`${item.imagen}`} alt={`${item.image}`}></img>
        <h3 className="tituloProducto containerRight">{item.nombre}</h3>
        <p className="descripcion containerRight">{item.description}</p>
        {!goCart ? ( 
        <Counter  className="contador containerRight" stock={item.stock} onAdd={onAdd}/>
        ):(
        <Link to="/carrito">Ir al Carrito</Link>
        )}
        
      </div>
    );
  };
  export default ItemDetail;
  