import FormCheckout from "../FormCheckout/FormChekout"

const Checkout = () => {
    return (
        <div className="container p-3">
            <h1 className="p-2">Checkout</h1>
            <p className="secondary">Complete los datos para finalizar la compra</p>
            <FormCheckout/>
        </div>
    )
}

export default Checkout