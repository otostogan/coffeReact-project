import {Container} from "react-bootstrap";

import {TitleSecondary} from '../../title/Title';
import CoffeDivider from '../../coffeDivider/CoffeDivider';

import './desc-single.scss';


const DescSingleCoffe = ({coffe}) =>{

    let {description, title, id, ingredients = [], urls} = coffe;

    const ingr = ingredients.map((item, i) => {
        if(i < ingredients.length-1){
            return ' ' + item +',';
        }else{
            return ' ' + item ;
        }
    })
    

  
    return(
        <section className="desc-single">
            <Container>
                <div className="desc-single-wrapper">
                    <img className="desc-single-img" src={urls ? urls.regular : ''} alt={title}/>
                    <div className="desc-single-content">
                        <TitleSecondary>
                            {title}
                        </TitleSecondary>
                        <CoffeDivider type="black"/>
                        <div className="desc-single-text">
                            <span>Ingredients: </span>
                             {ingredients ? ingr : null}
                        </div>
                        <div className="desc-single-text">
                            <span>Description: </span>
                             {description}
                        </div>
                        <div className="desc-single-price">
                            <span>Price: </span>
                            {Math.floor(Math.random() * (10 - 5) + 5) + '$'}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default DescSingleCoffe;