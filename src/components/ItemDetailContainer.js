import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const queryDb = doc(db, "items", id);
    getDoc(queryDb)
      .then((resp) => setProducto({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <div className="ContainerFather">
      {loading ? (
        <h2 className="animate__animated animate__lightSpeedInLeft">
          Cargando...{" "}
        </h2>
      ) : (
        <ItemDetail item={producto} />
      )}
    </div>
  );
};
export default ItemDetailContainer;
