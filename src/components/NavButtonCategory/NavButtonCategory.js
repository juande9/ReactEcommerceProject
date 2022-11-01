import "./NavButtonCategory.css"
import { NavLink } from "react-router-dom"

const NavButtonCategory = ({ children }) => {
    return (
        <NavLink to={`/category/${children.toLowerCase()}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
            {children}
        </NavLink>
    )
}

export default NavButtonCategory