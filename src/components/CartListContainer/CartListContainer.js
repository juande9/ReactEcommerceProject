import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"
import { Link } from "react-router-dom"

const CartListContainer = () => {

    const { cart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div>
                <h2 style={{ fontWeight: 400 }}>El carrito esta vacío</h2>
                <Link className="btn btn-warning m-1" to="/">Volver al catálogo</Link>
            </div >
        )
    }

    return (
        <div>
            {cart.map(item => <CartList {...item} key={item.id} />)}
        </div>
    )
}

export default CartListContainer
