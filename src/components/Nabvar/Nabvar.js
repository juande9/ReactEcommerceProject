import CartWidget from "../CartWidget/CartWidget"
import NavButton from "../NavButton/NavButton"
import { Link } from "react-router-dom"

const Nabvar = () => {

    return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container">
                    <Link to="/">
                        <h1 className="navbar-brand">Bufandas Futboleras</h1>
                    </Link>
                    <div>
                        <NavButton>
                            España
                        </NavButton>
                        <NavButton>
                            Italia
                        </NavButton>
                        <NavButton>
                            Inglaterra
                        </NavButton>
                        <NavButton>
                            Francia
                        </NavButton>
                        <CartWidget />
                    </div>
                </div>
            </nav>
    )
}

export default Nabvar