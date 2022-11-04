import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from "../../services/firebase"
import { Toast } from "../../SweetAlerts/SweetAlets"
import Spinner from "../Spinner/Spinner"

const FormCheckout = () => {

    const { cart, totalPriceOrder } = useContext(CartContext)

    const [loading, setLoading] = useState(false)

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [number, setNumber] = useState()

    if (cart.length === 0) {
        return (
            <div style={{ fontWeight: "500", color:"red" }}>El carrito esta vacío. Completelo para continuar</div>
        )
    }

    const createOrder = async () => {

        setLoading(true)

        try {

            Toast.fire({
                icon: "info",
                title: "Se esta generando la orden. Aguarde un momento."
            })

            const newOrder = {
                buyer: {
                    name: { name },
                    email: { email },
                    number: { number },
                },
                items: cart,
                totalPriceOrder,
            }


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

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div>
                <Spinner />
            </div>
        )
    }

    return (
        <div>
            <div className="form-floating mb-3">
                <input type="text" name="name" className="form-control" onChange={(e) => setName(e.target.value)} required ></input>
                <label htmlFor="floatingName">Nombre Completo</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required></input>
                <label htmlFor="floatingEmail">E-mail</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" name="number" className="form-control" onChange={(e) => setNumber(e.target.value)} required></input>
                <label htmlFor="floatingNumber">Número Telefonico</label>
            </div>
            <button className="btn btn-primary" type="submit" onClick={createOrder}>Submit form</button>
        </div>
    )
}

export default FormCheckout