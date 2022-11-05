import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import Spinner from "../Spinner/Spinner"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)

        getProducts(categoryId)
            .then(products => {
                setProducts(products)
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