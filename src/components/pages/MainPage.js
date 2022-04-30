import Promo from '../sections/promo/Promo';
import About from '../sections/about/About';
import OurBest from '../sections/ourBest/OurBest';

import promoBg from '../sections/promo/main-page-promo-bg.jpg' 
import ourBestBg from '../sections/ourBest/our-best-bg.jpg' 

import ErrorBoundary from '../errorBoundary/ErrorBoundary'

const MainPage = (props) =>{

    const {page} = props;

    return(
        <div className={page}>
            <Promo bg={promoBg}/>
            <About/>
            <ErrorBoundary>
                <OurBest bg={ourBestBg}/>
            </ErrorBoundary>
            
        </div>
    )
}

export default MainPage;