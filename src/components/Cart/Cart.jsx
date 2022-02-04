import React, { useState } from 'react';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore"
import { Link } from 'react-router-dom'
import './Cart.css';
const Cart = () => {
    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name: "", email: "", phone: ""
    })
    const { cartList, borrarCarrito, precioTotal,borrarItem,} = useContext(CartContext);
    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    const generarOrden = (e) => {
        e.preventDefault()
        let orden = {}
        orden.date = Timestamp.fromDate(new Date())
        orden.buyer = dataForm
        orden.total = precioTotal();
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const precio = cartItem.price * cartItem.cant;
            return { id, nombre, precio }
        })
        const db = getFirestore()
        const ordenColeccion = collection(db, 'orders')
        addDoc(ordenColeccion, orden)
            .then(resp => setIdOrder(resp.id))
            .catch(err => console.log(err))
    }
    return (
        <div className="ContainerForm">
            {idOrder.length !== 0 && idOrder}
            {cartList.map(prod => <ul className="ProductosLi  animate__animated animate__zoomIn"><h5> Producto Cargado :</h5>
                <br></br>
                <li>
                    <h5>Nombre:{prod.nombre}</h5>
                    <h5>Cantidad:{prod.cant}</h5>
                    <h5>Precio:{prod.price}</h5>
                    <h5>Total Carrito:{precioTotal()}</h5>
                </li> 
                
                <form className="form  animate__animated animate__zoomIn"
                onSubmit={generarOrden}
                onChange={handleChange}
            >
                
                <button className="FormButtonOrder">generar Order</button>
            </form>
            <button className="FormButton  animate__animated animate__zoomIn" onClick={borrarCarrito}>Vaciar Carrito</button>
            <button className="FormButton  animate__animated animate__zoomIn" onClick={ () => borrarItem(prod.id)}>Eliminar Producto</button>
            <button className="FormButton  animate__animated animate__zoomIn">
                <Link to="/">Seguir Comprando</Link>
            </button>
            <button className="FormButton  animate__animated animate__zoomIn">
                <Link to="/form/:idform">Confirmar Compra</Link>
            </button>
            </ul>)}
        </div>
    )
}
export default Cart
