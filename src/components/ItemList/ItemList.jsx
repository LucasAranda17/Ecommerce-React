import React from 'react'
import Item from '../Item/Item'

function ItemList({ productos }) {
    return (
        <>
        {console.log(productos)}
            { productos.map((prod,index) => <Item key={index}prod= {prod}  />)  }    
        </>
    )
}

export default ItemList
