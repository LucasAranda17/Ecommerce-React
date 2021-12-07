import React from 'react'

function Item({prod}) {
    return (
                <div 
                key={prod.id}
                className='col-md-4'
                >

                    <div className="card w-60 mt-5">
                        <div className="card-header">
                            {`${prod.nombre}-${prod.categoria}`}
                        </div>
                        <div className="card-body">
                            <img src={prod.imagen} alt='' className="w-50"/>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-outline-primary btn-block">
                                Detalle de Producto
                            </button>

                        </div>
                    </div>
                </div>
       )
}

export default Item
