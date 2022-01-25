import React, { useState } from 'react';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore"
import { Link } from 'react-router-dom'
import './Cart.css';
import swal from 'sweetalert';
const Cart = () => {
    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name: "", email: "", phone: ""
    })
    const { cartList, borrarCarrito, precioTotal } = useContext(CartContext);
    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    const alerta = () => {
        swal({
            title: "Producto Comprado",
            icon: "success",
            button: "Aceptar"
        });
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
            const precio = cartItem.price * cartItem.cantidad;
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
            {cartList.map(prod => <ul className="ProductosLi  animate__animated animate__zoomIn">Producto Cargado :
                <br></br>
                <li>
                    {prod.nombre}{prod.cantidad}
                </li>
            </ul>)}
            <form className="form  animate__animated animate__zoomIn"
                onSubmit={generarOrden}
                onChange={handleChange}
            >
                <h1 className="FormTitle">Formulario</h1>
                <input className="FormInput"
                    type='text'
                    name='name'
                    placeholder='name'
                    value={dataForm.name}
                /><br></br>
                <input className="FormInput"
                    type='text'
                    name='phone'
                    placeholder='tel'
                    value={dataForm.phone}
                /><br></br>
                <input className="FormInput"
                    type='email'
                    name='email'
                    placeholder='email'
                    value={dataForm.email}
                /><br></br>
                <input className="FormInput"
                    type='email'
                    name='email'
                    placeholder=' Confirmar Correo'
                    value={dataForm.email}
                /><br></br>
                <button className="FormButtonOrder">generar Order</button>
                <button className="FormButton  animate__animated animate__zoomIn" onClick={alerta}>Comprar</button>
            </form>
            <button className="FormButton  animate__animated animate__zoomIn" onClick={borrarCarrito}>Vaciar Carrito</button>
            <button className="FormButton  animate__animated animate__zoomIn">
                <Link to="/">Seguir Comprando</Link>
            </button>
        </div>
    )
}
export default Cart
