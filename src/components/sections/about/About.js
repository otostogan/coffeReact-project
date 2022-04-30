import {TitleSecondary} from '../../title/Title';
import CoffeDivider from '../../coffeDivider/CoffeDivider'
import {Container} from "react-bootstrap";

import TextA from '../../textA/TextA';

import './about.scss';

const About = () => {
    return(
        <section className="about">
            <Container>
                <TitleSecondary>
                    About Us
                </TitleSecondary>
                <CoffeDivider type="black"/>
                <TextA>
                    <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                    <p>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </TextA>
            </Container>
        </section>
    )
}

export default About;