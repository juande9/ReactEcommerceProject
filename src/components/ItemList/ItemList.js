import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import Item from "../Item/Item"

const ItemList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <h1>Cargando..</h1>
    }

    return (
        <div className="d-flex justify-content-between container">
            {products.map(prod => <Item {...prod} key={prod.id} />)}
        </div>
    )
}

export default ItemList