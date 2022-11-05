import FormCheckout from "../FormCheckout/FormChekout"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from "../../services/firebase"
import { Toast } from "../../SweetAlerts/SweetAlets"

const FormCheckoutContainer = () => {

    const { cart, totalPriceOrder } = useContext(CartContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [email2, setEmail2] = useState("")
    const [number, setNumber] = useState("")

    const HandleSetName = (value) => {
        setName(value)
    }

    const HandleSetEmail = (value) => {
        setEmail(value)
    }

    const HandleSetEmail2 = (value) => {
        setEmail2(value)
    }

    const HandleSetNumber = (value) => {
        setNumber(value)
    }


    const createOrder = async () => {

        try {

            if (email === email2 && name && number) {

                const newOrder = {
                    buyer: {
                        name: { name },
                        email: { email },
                        number: { number },
                    },
                    items: cart,
                    totalPriceOrder,
                }

                Toast.fire({
                    icon: "info",
                    title: "Se esta generando la orden. Aguarde un momento."
                })

                const batch = writeBatch(db)

                const outOfStock = []

                const ids = cart.map(prod => prod.id)

                const productsRef = collection(db, "products")

                const productsFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

                const { docs } = productsFirestore


                docs.forEach(prod => {

                    const stockDb = prod.data().stock

                    const productAddedtoCart = cart.find(prodCart => prodCart.id === prod.id)
                    const productQuantity = productAddedtoCart?.quantity

                    if (stockDb >= productQuantity) {
                        batch.update(prod.ref, { stock: stockDb - productQuantity })
                    } else {
                        outOfStock.push({ id: prod.id, ...prod.data() })
                    }
                })

                if (outOfStock.length === 0) {
                    await batch.commit()

                    const collectionRef = collection(db, "orders")

                    const newOrderCreated = await addDoc(collectionRef, newOrder)

                    Toast.fire({
                        icon: "success",
                        title: `La orden ${newOrderCreated.id} ha sido generada con exito`
                    })
                } else {
                    Toast.fire({
                        icon: "error",
                        title: `Hubo un error en la generación de la orden`
                    })
                }
            } else if (email !== email2) {
                Toast.fire({
                    icon: "error",
                    title: "Los mails ingresados no coinciden."
                })
            } else if (!name) {
                Toast.fire({
                    icon: "error",
                    title: "Debe ingresar un nombre."
                })
            } else if (!number) {
                Toast.fire({
                    icon: "error",
                    title: "Debe ingresar un número valido."
                })
            }

        } catch (error) {
            console.dir(error)
        } 
    }

    return (
        <div>
            <h1 className="p-2">Checkout</h1>
            <p className="secondary">Complete los datos para finalizar la compra</p>
            <FormCheckout
                setName={HandleSetName}
                setEmail={HandleSetEmail}
                setEmail2={HandleSetEmail2}
                setNumber={HandleSetNumber}
                createOrder={createOrder}
            />
        </div>
    )
}

export default FormCheckoutContainer