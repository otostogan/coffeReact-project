import bannerBg from  '../sections/banner/PleasurePage.png';
import descBg from  '../sections/desc/pleasure.png';

import Banner from '../sections/banner/Banner';
import Desc from '../sections/desc/Desc';
import CoffeCard from '../coffeCard/coffeCard';

import {Container} from 'react-bootstrap';

import './pleasure.scss';


const PleasurePage = (props) => {

    const {page} = props;

    const BannerSet = {
        title: 'For your pleasure',
        bg: bannerBg
    }

    const DescSet = {
        title: 'About our beans',
        img: descBg, 
        text: ['Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.', 'Afraid at highly months do things on at. Situation recommend objection do intention so questions.', 'As greatly removed calling pleased improve an. Last ask him cold feel', 'met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.']
    }

    return(
        <div className={page}>
            <Banner info={BannerSet}/>
            <Desc info={DescSet}/>
            <section className="look">
                <Container>
                    <div className="look__wrapper">
                        <CoffeCard exerpt items={6}/>
                    </div>
                </Container>
            </section>
            
        </div>
    )
}
export default PleasurePage;