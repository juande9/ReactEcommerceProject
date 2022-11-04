import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import Spinner from "../Spinner/Spinner"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, "products"), where("country", "==", categoryId))
            : collection(db, "products")

        getDocs(collectionRef).then(response => {
            const adaptedProducts = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProducts(adaptedProducts)
        }).catch(error => {
            console.log(error)
        }).finally(() => setLoading(false))
    }, [categoryId])


    if (loading) {
        return Spinner()
    }

    return (
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer