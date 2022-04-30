import {Container} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {Title} from '../../title/Title';
import CoffeDivider from '../../coffeDivider/CoffeDivider'

import './promo.scss'

const Promo = (props) =>{

    const {bg} = props;

    return (
        <section style={{background: `url(${bg})  50% center / cover no-repeat`}} className="promo">
            <Container>
                <Title>
                    Everything You Love About Coffee
                </Title>
                <CoffeDivider type="white"/>
                <div className="promo__text">
                    <span>We makes every day full of energy and taste</span>
                    <span>Want to try our beans?</span>
                </div>
                <div className="promo__btn">
                    <NavLink to="/availability">
                        More
                    </NavLink>
                    
                </div>
            </Container>
        </section>
    )
}

export default Promo;