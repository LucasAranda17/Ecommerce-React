import { createContext, useState } from 'react';
export const CartContext = createContext([])
function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([])
    const agregarAlCarrito = (item) => {
        const index = cartList.findIndex(i => i.id === item.id)
        if (index > -1) {
            const oldQy = cartList[index].cantidad
            cartList.splice(index, 1)
            setCartList([...cartList, { ...item, cantidad: item.cantidad + oldQy }])
        } else {
            setCartList([...cartList, item])
        }
    }
    function borrarCarrito() {
        setCartList([])
    }
    const totalUnidades = () => {
        let count = 0
        cartList.forEach((producto) => {
            count += producto.cant
        })
        return count
    }
    const precioTotal = () => {
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.price), 0)
    }
    const borrarItem = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }
    return (
        <CartContext.Provider value={{
            cartList,
            precioTotal,
            agregarAlCarrito,
            borrarCarrito,
            totalUnidades,
            borrarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider