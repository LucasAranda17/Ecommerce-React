import React ,{ useState }from 'react';
import './Counter.css';
const Counter =({ stock, onAdd })=>{
    const[number,setNumber] = useState(1);

    const add = () => {
        number !== stock && setNumber(number + 1);
    };
    const substract = () => {
        number !==0 && setNumber(number - 1);
    };
    return(
        <div className="Contador  animate__animated animate__zoomIn">
            <p>Stock {""}{number}</p>
            <div className="ContadorButton animate__animated animate__zoomIn">
                <button  onClick={add}>+</button>
                <button onClick={substract}>-</button>
                <button  disabled={number === 0} onClick={()=>onAdd(number)}>Agregar a Carrito</button>       
            </div>
        </div>
    );
};
export default Counter;