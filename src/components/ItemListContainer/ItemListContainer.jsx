import {useState,useEffect} from 'react'
import {useParams}from 'react-router-dom'
import { getFetch } from "../../helpers/getFetch"
import ItemList from '../ItemList/ItemList'

import './itemListContainer.css';

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCate }=useParams()


   useEffect(()=>{
       if (idCate) {
        getFetch
        .then(resp => setProductos(resp.filter(prod=>prod.categoria===idCate)))
        .catch(err=>console.error(err))
        .finally(()=>setLoading(false))
       }else{
        getFetch
    .then(resp => setProductos(resp))
    .catch(err=>console.error(err))
    .finally(()=>setLoading(false))
       }
   }, [idCate])

 
    

    return (
        <div className = "containerFather">
        {loading ?
            <h2>Cargando...</h2>
            : 
           <ItemList productos={productos} />
         }
        </div>
    )
}

export default ItemListContainer
