import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemCard from "../ItemCard/ItemCard"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }).finally(() => setLoading(false))
    }, [])

    /*     const productsMapped = products.map(prod => <ItemCard name={prod.name} id={prod.id} />) */
    if (loading) {
        return <h1>Cargando..</h1>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            {products.map(prod => <ItemCard {...prod} key={prod.id} />)}
        </div>
    )
}

export default ItemListContainer