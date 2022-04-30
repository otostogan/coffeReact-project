import { NavLink } from "react-router-dom";

import './header.scss'

const Header = () => {
    
    return (
        <header className="header">
            <ul>
                <li>
                    <NavLink to="/">Coffee house</NavLink>
                </li>
                <li>
                    <NavLink to="/availability">Our coffee</NavLink>
                </li>
                <li>
                    <NavLink to="/pleasure">For your pleasure</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;