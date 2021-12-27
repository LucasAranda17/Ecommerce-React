import { createContext,useState,useContext } from 'react';

const CartContext = createContext([]) 
export const useCartContext = () =>useContext(CartContext)

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([])

    //  function agregarAlCarrito(item) {
    //     setCartList([...cartList,item])
    // }


    const agregarAlCarrito= (item)=>{
        const index = cartList.findIndex(i => i.id === item.id)
        if(index>-1){
            const oldQy = cartList[index].cantidad

            cartList.splice(index,1)

            setCartList([...cartList,{...item, cantidad:item.cantidad + oldQy}])
        }else{
            setCartList([...cartList,item])    
        }
    }


    function borrarCarrito() {
        setCartList([])
    }
    const totalUnidades = () => {
        const count = 0
       cartList.forEach((producto)=> {
              count += producto.cantidad
           })
         return count
       }
       value = {totalUnidades}
    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            borrarCarrito
        }}>
                { children }
        </CartContext.Provider>
    )
}
export default CartContextProvider