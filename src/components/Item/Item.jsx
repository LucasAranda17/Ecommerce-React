import { Link } from 'react-router-dom'
import './item.css';
function Item({ prod }) {
    return (
        <div
            key={prod.id}
            className='col-md-4 animate__animated animate__zoomIn'
        >
            <div className="card w-60 mt-5">
                <div className="card-header  animate__animated animate__zoomIn">
                    {`${prod.nombre}-${prod.categoria}`}
                </div>
                <div className="card-body  animate__animated animate__zoomIn">
                    <img src={prod.imagen} alt='' className="w-50" />
                </div>
                <h1 className="precio  animate__animated animate__zoomIn">{prod.price}</h1>
                <div className="card-footer  animate__animated animate__zoomIn">
                    <Link to={`/detalle/${prod.id}`}>
                        <button className="btn btn-outline-primary btn-block  animate__animated animate__zoomIn">
                            Detalle de Producto
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Item
