import "./ItemDetail.css"
import { useState } from "react"
import Counter from "../Counter/Counter"
import { useContext } from "react"
import ItemLinktoCart from "../ItemLinktoCart/ItemLinktoCart"
import { CartContext } from '../../context/CartContext'
import { Toast } from "../../SweetAlerts/SweetAlets"

const ItemDetail = ({ img, team, logoId, price, league, decade, id, stock }) => {

    const [productAdded, setproductAdded] = useState(false)
    const { addItem } = useContext(CartContext)

    const HandleOnAdd = (quantity) => {
        if (quantity > 0) {
            setproductAdded(true)
            const productToAdd = {
                id, img, team, logoId, price, quantity
            }
            addItem(productToAdd)
            Toast.fire({
                icon: 'success',
                title: `Has agregado ${quantity} productos al carrito`
              })
        }
    }

    const imgLogoUrl = `https://crests.football-data.org/${logoId}`

    return (
        <div className="row">
            <div className="col-8">
                <img src={img} alt={team} style={{ width: "12em" }}></img>
            </div>
            <div className="detailItem col-4">
                <h2 className="border-bottom" style={{ paddingBottom: 10 }}>$ {price}</h2>
                <img src={imgLogoUrl} alt={team} style={{ width: "3em", margin: "1em" }}></img>
                <div>
                    <h5 className="details">Equipo</h5>
                    <p >{team}</p>
                </div>
                <div>
                    <h5 className="details">Liga</h5>
                    <p >{league}</p>
                </div>
                <div >
                    <h5 className="details">Decada</h5>
                    <p >{decade}</p>
                </div>
                {productAdded ? <ItemLinktoCart /> :
                    stock !== 0 ? <Counter onAdd={HandleOnAdd} stock={stock} /> :
                        <p style={{ color: "crimson", fontWeight: "500" }}>No hay stock</p>}
            </div>
        </div>
    )
}

export default ItemDetail