import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import Spinner from "../Spinner/Spinner"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainter = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {

        const docRef = doc(db, "products", productId)

        getDoc(docRef).then(response => {
            const data = response.data()
            const adaptedProduct = { id: response.id, ...data }
            setProduct(adaptedProduct)
        }).finally(() => setLoading(false))
    }, [productId])

    if (loading) {
        return Spinner()
    }

    return (
        <div className="container" style={{ marginTop: 75 }}>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainter