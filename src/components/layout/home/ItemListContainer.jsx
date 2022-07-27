import ItemCount from "./ItemCount"

const ItemListContainer = ({name}) =>{
    return(
        <div>
            <h2>
                Buenas noches {name}
            </h2>
            <hr/>
            <ItemCount initial={1} stock={5} nameProduct={'Short de futbol'}/>
        </div>
        
    )
}

export default ItemListContainer