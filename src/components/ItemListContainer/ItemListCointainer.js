import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)

        const asyncFunctionProducts = categoryId ? getProductsByCategory : getProducts

        asyncFunctionProducts(categoryId).then(response => {
            setProducts(response)
        }).finally(() => setLoading(false))
    }, [categoryId])

    if (loading) {
        return <img src="https://i.stack.imgur.com/kOnzy.gif" style={{ width: "10em", padding: "1em" }} alt="Cargando..."></img>
    }

    return (
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer