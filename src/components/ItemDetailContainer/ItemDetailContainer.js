import { useEffect, useState } from "react"
import { getProductbyId } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainter = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProductbyId(productId).then(response => {
            setProduct(response)
        }).finally(() => setLoading(false))
    }, [productId])

    if (loading) {
        return <img src="https://i.stack.imgur.com/kOnzy.gif" style={{ width: "10em", padding: "1em" }} alt="Cargando..."></img>
    }

    return (
        <div className="container vh-100" style={{ marginTop: 75 }}>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainter