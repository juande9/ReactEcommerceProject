import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {products.map(prod => <Item {...prod} key={prod.id} />)}
            </div>
        </div>
    )
}

export default ItemList