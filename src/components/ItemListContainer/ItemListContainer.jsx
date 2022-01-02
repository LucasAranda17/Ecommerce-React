import {useState,useEffect} from 'react'
import {useParams}from 'react-router-dom'
// import { getFetch } from "../../helpers/getFetch"
import ItemList from '../ItemList/ItemList'
import {collection,getFirestore,getDocs,query,where} from'firebase/firestore'

import './itemListContainer.css';

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCate }=useParams()


//    useEffect(()=>{
//        if (idCate) {
//         getFetch
//         .then(resp => setProductos(resp.filter(prod=>prod.categoria===idCate)))
//         .catch(err=>console.error(err))
//         .finally(()=>setLoading(false))
//        }else{
//         getFetch
//     .then(resp => setProductos(resp))
//     .catch(err=>console.error(err))
//     .finally(()=>setLoading(false))
//        }
//    }, [idCate])

// useEffect(()=>{
//     const db = getFirestore()
//     const queryDb = doc(db,'items','EfzJkLZAoaRH6m5ivaJe')
//     getDoc(queryDb)
//     .then(resp => setProducto({id:resp.id, ...resp.data() }))
// }, [idCate])
useEffect(()=>{

    const db = getFirestore()

    const queryCollection = query(collection(db,'items'),where('price','>',100))
    getDocs(queryCollection)
    .then(resp => setProductos(resp.docs.map(prod => ({id:resp.id, ...prod.data() }))))
    .catch(err => console.log(err))
    .finally(() =>setLoading(false))
    
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
