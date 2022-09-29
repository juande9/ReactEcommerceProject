import "./Counter.css"
import { useState } from "react";

const Counter = () => {

    const [number, setNumber] = useState(0)
    const [error, setError] = useState()

    function add() {
        setNumber(number + 1)
        setError("")
    }

    function remove() {
        number > 0 ? setNumber(number - 1) : setError("Menos que cero no se puede papu.")
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
            <div className="error">{error}</div>
        </div>
    )
}

export default Counter