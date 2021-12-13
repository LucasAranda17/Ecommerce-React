// import {useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import getOneProduct from "../helpers/getOneProduct";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  // const {id} = useParams()
  const [item, setItem] = useState([]);
  console.log("item", item);

  useEffect(() => {
    getOneProduct.then((res) => setItem(res)).catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>ACA VA EL ITEMDETAILCONTAINER</h1>
      <ItemDetail item={item} />
    </div>
  );
};
export default ItemDetailContainer;