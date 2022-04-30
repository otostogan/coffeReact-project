import {Container} from "react-bootstrap";
import {Title} from '../../title/Title';

import './banner.scss';

const Banner = ({info}) =>{

    let {bg, title} = info;
    
    

    return (
        <section style={{background: `url(${bg})  50% center / cover no-repeat`}} className="banner">
            <Container>
                <Title>{title}</Title>
            </Container>
        </section>
    );
}

export default Banner;