import "./NavButton.css"
import { Link } from "react-router-dom"

const NavButton = ({ children }) => {
    return (
        <Link to={`/category/${children.toLowerCase()}`} className="NavButton">
            {children}
        </Link>
    )
}

export default NavButton