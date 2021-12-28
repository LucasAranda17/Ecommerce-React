import { createContext,useState,useContext } from 'react';

const CartContext = createContext([]) 
export const useCartContext = () =>useContext(useCartContext)

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([])

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
        let count = 0
       cartList.forEach((producto)=> {
              count += producto.cantidad
           })
         return count
       }
       
    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            borrarCarrito,
            totalUnidades
        }}>
                { children }
        </CartContext.Provider>
    )
}
export default CartContextProvider