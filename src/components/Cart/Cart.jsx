import React, {useState} from 'react';
import {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import {  addDoc, collection,getFirestore,Timestamp} from "firebase/firestore"

const Cart = () => {
    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:"",email:"",phone:""
    })
    const {cartList,borrarCarrito,precioTotal}= useContext(CartContext);
    const handleChange = (e) =>{
        // console.log(e.target.name)
        // console.log(e.target.value)
        setDataForm({
            ...dataForm,
            [e.target.name]:e.target.value
        })
    }

    const generarOrden = (e) =>{
        e.preventDefault()

        let orden = {}

        orden.date = Timestamp.fromDate(new Date())

        orden.buyer = dataForm
        orden.total = precioTotal();

        orden.items = cartList.map(cartItem =>{
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const precio = cartItem.price * cartItem.cantidad; 

            return{id,nombre,precio}
        })
    //generar orden
        const db = getFirestore()
        const ordenColeccion = collection(db, 'orders')
        addDoc(ordenColeccion, orden)
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
    } 
       // modificar update
        // const docModifcar = doc(db, 'items', 'HwIOrcsrOowvI3SwvnC1')
        // const docModifcar1 = doc(db, 'items', 'KoQl02tM8vf2JEURhQk3')
        // updateDoc(docModifcar, {
        //     stock: 99
        // })
        // .then(resp => console.log('modificado'))

        // Escritura por lotes
        // const batch = writeBatch(db)
        // batch.update(docModifcar, {
        //     stock: 90
        // })
        // batch.update(docModifcar1, {
        //     stock: 99
        // })
        // batch.commit()
        // console.log(orden)


            
    return (
        <div>
            {idOrder.length !== 0 && idOrder}
            {cartList.map(prod=><li>{prod.nombre}{prod.cantidad}</li>)}
            <form 
            onSubmit={generarOrden}
            onChange={handleChange}
            >
                <input 
                type='text'
                 name='name'
                  placeholder='name'
                   value={dataForm.name}
                   /><br></br>
                <input
                 type='text'
                  name='phone'
                   placeholder='tel' 
                   value={dataForm.phone}
                   /><br></br>
                <input
                 type='email'
                  name='email'
                   placeholder='email' 
                   value={dataForm.email}
                   /><br></br>
                <button>generar Order</button>
            </form>
            <button onClick={borrarCarrito}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart
