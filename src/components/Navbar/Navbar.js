import CartWidget from "../CartWidget/CartWidget"
import NavButton from "../NavButton/NavButton"

const Navbar = () => {

    return (
        <header className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href=".">Bufandas Futboleras</a>
                <div className="">
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
                        Otros
                    </NavButton>
                    <CartWidget />
                </div>
            </div>
        </header>
    )
}

export default Navbar