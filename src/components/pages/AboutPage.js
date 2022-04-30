import bannerBg from  '../sections/banner/about-banner.jpg';
import descBg from  '../sections/desc/our-coffee.png';

import Banner from '../sections/banner/Banner';
import Desc from '../sections/desc/Desc';
import LookFor from '../sections/look/LookFor';


const AboutPage = (props) => {

    const {page} = props;

    const BannerSet = {
        title: 'Our Coffee',
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
            <LookFor/>
        </div>
    )
}
export default AboutPage;