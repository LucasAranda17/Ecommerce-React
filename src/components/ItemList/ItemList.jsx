import React from 'react'
import Item from '../Item/Item'

function ItemList({ productos }) {
    return (
        <>
            { productos.map((prod,index) => <Item key={index}prod= {prod}  />)  }    
        </>
    )
}

export default ItemList
