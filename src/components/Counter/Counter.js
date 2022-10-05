import "./Counter.css"
import { useState } from "react";

const Counter = ({onAdd}) => {
    const [number, setNumber] = useState(0)
    const [error, setError] = useState()

    let stock = 5

    function add() {
        if (number < stock) {
            setNumber(number + 1)
            setError("")
        } else {
            setError("Nos quedamos sin stock.")
        }
    }

    function remove() {
        if (number > 0) {
            setNumber(number - 1)
            setError("")
        } else {
            setError("Menos de cero no se puede.")
        }

    }

    return (
        <div>
            <div className="counter">
                <button type="button" onClick={remove}>
                    <i className="bi bi-dash"></i>
                </button>
                <h5>{number}</h5>
                <button type="button" onClick={add}>
                    <i className="bi bi-plus"></i>
                </button>
            </div>
            <button type="button" onClick={onAdd}>
                Agregar al Carrito
            </button>
            <div className="error">{error}</div>
        </div>
    )
}

export default Counter