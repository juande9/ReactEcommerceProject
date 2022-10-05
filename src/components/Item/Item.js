import "./Item.css"
import Counter from "../Counter/Counter"

const Item = ({ title, img }) => {

    return (
        <div className="card d-flex align-items-center" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt={title}></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Counter />
            </div>
        </div>
    )
}

export default Item