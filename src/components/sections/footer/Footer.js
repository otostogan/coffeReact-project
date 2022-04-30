import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CoffeDivider from "../../coffeDivider/CoffeDivider";

import './footer.scss';

const Footer = () =>{
    return (
        <footer className="footer">
            <Container>
               <div className="footer__wrapper">
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
                    <CoffeDivider type="black"/>
               </div>
            </Container>
        </footer>
    )
}

export default Footer;