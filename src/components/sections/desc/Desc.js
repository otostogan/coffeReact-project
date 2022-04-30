import {Container} from "react-bootstrap";

import {TitleSecondary} from '../../title/Title';
import TextA from "../../textA/TextA";
import CoffeDivider from '../../coffeDivider/CoffeDivider'

import './desc.scss';


const Desc = ({info}) => {
    
    let {title, img, text} = info;

    const textContent = text.map((textContent, i) => {
        return <p key={i}>{textContent}</p>;
    });

    

    return (
        <section className="desc-section">
            <Container>
                <div className="desc-section-wrapper">
                    <img src={img} alt="girl with coffe"/>
                    <div className="desc-section-content">
                        <TitleSecondary>
                            {title}
                        </TitleSecondary>
                        <CoffeDivider type="black"/>
                        <TextA>
                            {textContent}
                        </TextA>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Desc;