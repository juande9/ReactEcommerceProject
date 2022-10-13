import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ title, img, logoId, team, decade, stock, id }) => {

    const imgLogoUrl = `https://crests.football-data.org/${logoId}`

    return (
        <div className="card col-4 align-items-center" style={{ width: "18rem", margin: "1em" }}>
            <img src={img} className="card-img-top" alt={title}></img>
            <div className="card-body">
                <img src={imgLogoUrl} alt={team} className="logo"></img>
                <h5 className="card-title">{team}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{decade}</h6>
                <Link to={`/item/${id}`}>
                    <button>
                        Ver detalles
                    </button>
                </Link>
            </div>
            <div className="stock">
                Stock: {stock}
            </div>
        </div >
    )
}

export default Item