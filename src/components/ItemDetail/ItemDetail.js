import "./ItemDetail.css"
import Counter from "../Counter/Counter"

const ItemDetail = ({ img, team, logoId, price, league, decade }) => {

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
                <Counter />
            </div>
        </div>
    )
}

export default ItemDetail