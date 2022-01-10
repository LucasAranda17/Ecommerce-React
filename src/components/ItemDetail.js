import React, {useContext,useState} from 'react';
import './itemDetail.css';
import Counter from './Navbar/Counter';
import {Link} from 'react-router-dom'
import { CartContext} from '../components/context/CartContext';

const ItemDetail = ({ item }) => {
  const {agregarAlCarrito} = useContext(CartContext);
  const [goCart,setGoCart] = useState(false)

  const onAdd = ( cant)=> {
    agregarAlCarrito({...item,cant:cant})
    setGoCart(true)
  }
    return (
      <div className="flex">
        <img className="imgDetail"src={`${item.imagen}`} alt={`${item.image}`}></img>
        <h3 className="tituloProducto containerRight">{item.nombre}</h3>
        <p className="descripcion containerRight">{item.descripcion}</p>
        {!goCart ? (
        <Counter  className="contador containerRight" stock={item.stock} onAdd={onAdd}/>
        ):(
        <Link to="/carrito">Ir al Carrito</Link>
        )}
        
      </div>
    );
  };
  export default ItemDetail;
  