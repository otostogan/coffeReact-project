import {TitleSecondary} from '../../title/Title';
import {Container} from "react-bootstrap";

import CoffeCard from '../../coffeCard/coffeCard'

import ErrorBoundary from '../../errorBoundary/ErrorBoundary'

import './ourbest.scss';

const OurBest = ({bg}) =>{
    return (
        <section style={{background: `url(${bg})  50% center / cover no-repeat`}} className="our-best">
            <Container>
                <TitleSecondary>
                    Our best
                </TitleSecondary>
                <div className="our-best-wrapper">
                    <ErrorBoundary>
                        <CoffeCard items={3}/>
                    </ErrorBoundary>
                </div>
            </Container>
        </section>
    )
}

export default OurBest;