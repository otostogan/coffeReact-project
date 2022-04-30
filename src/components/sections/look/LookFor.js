import {Container} from 'react-bootstrap';
import {useState} from "react";

import CoffeCard from '../../coffeCard/coffeCard';
import Filter from '../../filter/Filter';

import './look.scss';


const LookFor = () =>{

    const [input, setInput] = useState('');
    const [btnActive, setBtnActive] = useState('Hot');
        

    const onBtnChange = (data) =>{
        setBtnActive(data.name);
    }
    const onInputChange = (data) =>{
        setInput(data);
    }

    return (
        <section className="look">
            <Container>
                <Filter info={{input, btnActive}} onBtnChange={onBtnChange} onInputChange={onInputChange}/>
                <div className="look__wrapper">
                    <CoffeCard input={input} btnActive={btnActive} exerpt items={6}/>
                </div>
            </Container>
        </section>
    )
}
export default LookFor;