import React, { useState } from 'react'

const Item = ({item, initial = 1}) => {

    const [itemsAdded, addItem] = useState(1);

    const setItem = (value) =>{
        if( value ){
            itemsAdded < product.stock ? addItem(itemsAdded + 1): '';
        }else{
            itemsAdded > initial ? addItem(itemsAdded - 1) : '';
        }
    }
    
  return (
    <section className='container'>
        <h5>Nombre del producto: {item.title}</h5>
            <section className="controls">
                <button onClick={()=>setItem(0)} className="btn">
                    -
                </button>
                <span>
                    {itemsAdded}
                </span>
                <button onClick={()=>setItem(1)} className="btn">
                    +
                </button>
            </section>

            <hr/>
            <span className='text-stock'>Stock: {item.stock}</span>
            <p>
                <button className="btn btn-select">
                    Agregar al carrito
                </button>
            </p>
    </section>
  )
}

export default Item