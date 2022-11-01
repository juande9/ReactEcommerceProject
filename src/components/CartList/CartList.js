import "./CartList.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartList = ({ team, img, quantity, price, logoId, id }) => {

    const { removeItem, totalPriceOrder } = useContext(CartContext)

    const HandleRemoveItem = () => {
        removeItem(id)
    }

    const imgLogoUrl = `https://crests.football-data.org/${logoId}`

    return (
        <div className="row CartRow evenly">
            <img img src={imgLogoUrl} alt={team} className="col-2 logoList" />
            <img className="scarf col-2" src={img} alt={team} />
            <div className="col align-middle">{team}</div>
            <div className="col-2">{quantity}</div>
            <div className="col-2">{quantity * price}</div>
            <button type="button" className="btn btn-danger col-1 bi bi-x" onClick={HandleRemoveItem}> Eliminar</button>
            <div>{totalPriceOrder}</div>
        </div>
    )
}

export default CartList