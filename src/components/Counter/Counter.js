import "./Counter.css"
import { useState } from "react";

const Counter = ({ onAdd, stock }) => {
    const [quantity, setquantity] = useState(0)
    const [error, setError] = useState()

    function add() {
        if (quantity < stock) {
            setquantity(quantity + 1)
            setError("")
        } else {
            setError("Nos quedamos sin stock.")
        }
    }

    function remove() {
        if (quantity > 0) {
            setquantity(quantity - 1)
            setError("")
        }
    }

    return (
        <div>
            <div className="counter">
                <button type="button" onClick={remove}>
                    <i className="bi bi-dash"></i>
                </button>
                <h5>{quantity}</h5>
                <button type="button" onClick={add}>
                    <i className="bi bi-plus "></i>
                </button>
            </div>
            <button type="button" onClick={() => onAdd(quantity)}>
                Agregar al Carrito
            </button>
            <div className="error">{error}</div>
        </div>
    )
}

export default Counter