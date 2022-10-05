import "./ItemCard.css"

const ItemCard = ({ name, price }) => {

    return (
        <div>
            <li className="item">
                <h3>{name}</h3>
                <h4>{price}</h4>
            </li>
        </div>
    )
}

export default ItemCard
