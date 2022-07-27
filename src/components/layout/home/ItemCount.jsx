import { useState } from "react";
import "./itemCount.css"

const ItemCount = ({initial, stock, nameProduct = 'Producto'}) =>{

    const [itemsAdded, addItem] = useState(1);

    const setItem = (value) =>{
        if( value ){
            itemsAdded < stock ? addItem(itemsAdded + 1): '';
        }else{
            itemsAdded > initial ? addItem(itemsAdded - 1) : '';
        }
    }

    return (
        <div className="container">
            <h5>Nombre del producto: {nameProduct}</h5>
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
            <span>Stock: {stock}</span>
            <p>
                <button className="btn btn-select">
                    Agregar al carrito
                </button>
            </p>
        </div>
    )

}

export default ItemCount;