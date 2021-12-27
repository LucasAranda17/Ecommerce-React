import {useCartContext} from '../context/CartContext'

const Cart = () => {
    const {cartList,borrarCarrito}= useCartContext()
    return (
        <div>
            {cartList.map(prod=><li>{prod.nombre}{prod.cantidad}</li>)}
            <button onClick={borrarCarrito}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart
