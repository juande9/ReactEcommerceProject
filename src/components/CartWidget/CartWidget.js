import "./CartWidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <button type="button" className="btn btn-light">
            <i className="bi bi-cart2"></i>
            <span>{quantity}</span>
        </button>
    )
}

export default CartWidget