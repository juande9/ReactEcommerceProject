import "./CartWidget.css"

const CartWidget = () => {

    return (
        <button type="button" className="btn btn-light">
            <i className="bi bi-cart2"></i>
            <span>0</span>
        </button>
    )
}

export default CartWidget