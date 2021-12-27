import {useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import {getFetch} from "../helpers/getFetch";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const {id} = useParams()
  const [item, setItem] = useState([]);
  console.log("item", item);

  useEffect(()=>{
    setLoading(true);
    getFetch
    .then((res)=>{
      const unicoProd = res.find((i)=>i.id===parseInt(id));
      setItem(unicoProd);
      setLoading(false);
    })
    .catch((error)=>{
      console.error(error);
    });
  },[id]);

  return (
    <div className="ContainerFather">
      {loading ? <h2>Cargando... </h2>:  <ItemDetail item={item} />}
      <h1>ACA VA EL ITEMDETAILCONTAINER</h1>
    </div>
  );
};
export default ItemDetailContainer;