import { Link } from "react-router-dom"

const CartLinkItem = () => {
    return (
        <div className="d-flex flex-column">
            <Link className="btn btn-warning m-1" to="/cart">Terminar la compra</Link>
            <Link className="btn btn-light m-1" to="/">Seguir comprando</Link>
        </div>
    )
}

export default CartLinkItem