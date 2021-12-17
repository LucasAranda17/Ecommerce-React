import './itemDetail.css';

const ItemDetail = ({ item }) => {
    console.log("El item", item);
    return (
      <div className="flex">
        <h3 className="titulo f">ItemDetail</h3>
        <h3 className="tituloProducto f">{item.nombre}</h3>
        <p className="descripcion f">{item.description}</p>
        <img className="imgDetail"src={`${item.imagen}`} alt={`${item.image}`}></img>
      </div>
    );
  };
  export default ItemDetail;
  