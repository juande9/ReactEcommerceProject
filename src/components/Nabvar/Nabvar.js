import CartWidget from "../CartWidget/CartWidget"
import NavButtonCategory from "../NavButtonCategory/NavButtonCategory"
import { Link } from "react-router-dom"

const Nabvar = () => {

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
                <Link to="/">
                    <h1 className="navbar-brand">Bufandas Futboleras</h1>
                </Link>
                <div>
                    <NavButtonCategory>
                        España
                    </NavButtonCategory>
                    <NavButtonCategory>
                        Italia
                    </NavButtonCategory>
                    <NavButtonCategory>
                        Inglaterra
                    </NavButtonCategory>
                    <NavButtonCategory>
                        Francia
                    </NavButtonCategory>
                    <Link to="/cart">
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nabvar