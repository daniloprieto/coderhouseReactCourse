import { useEffect, useState } from "react"
import ItemCount from "./ItemList/ItemCount"
import ItemList from "./ItemList/ItemList";

const ItemListContainer = ({name}) =>{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let arrayProducts = [
            {id: 100, title: "Short de futbol", price: 35, pictureUrl: "", stock:6},
            {id: 101, title: "Short de rugby", price: 40, pictureUrl: "", stock:4},
            {id: 102, title: "Calza ciclista", price: 29, pictureUrl: "", stock:5},
            {id: 104, title: "Short pollera", price: 30, pictureUrl: "", stock:3},
        ]

        const promiseProducts = new Promise((res, rej) =>{
            setTimeout(() =>{
                res (arrayProducts);
            },2000)
        })

        promiseProducts.then( res =>{
            setProducts(res);
        });
    }, []);

    return(
        <div>
            <h2>
                Buenas noches {name}
            </h2>
            <hr/>
            <ItemCount initial={1} stock={5} nameProduct={'Short de futbol'}/>
            <hr/>
            <ItemList products={products}/>
        </div>
        
    )
}

export default ItemListContainer