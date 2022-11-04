import "./Counter.css"
import { useState } from "react";
import { Toast } from "../../SweetAlerts/SweetAlets"


const Counter = ({ onAdd, stock }) => {
    const [quantity, setquantity] = useState(0)

    function add() {
        if (quantity < stock) {
            setquantity(quantity + 1)
        } else {
            Toast.fire({
                icon: 'error',
                title: 'Has llegado al limite de stock'
              })
        }
    }

    function remove() {
        if (quantity > 0) {
            setquantity(quantity - 1)
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
        </div>
    )
}

export default Counter