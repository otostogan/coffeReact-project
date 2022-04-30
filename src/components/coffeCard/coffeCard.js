import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import CoffeService from '../../services/coffeApi';

import Loader from '../loader/Loader';
import ErrorMessage from '../errorMessage/ErrorMessage';



import './coffecard.scss';

const CoffeCard = ({items, exerpt, btnActive, input}) => {

    const {loading, error, wholeItems} = CoffeService();

    const [coffe, setCoffe] = useState([]);

    const [coffeCoppy, setCoffeeCoppy] = useState([]);

    useEffect(()=> {

        let isSubscribed = true;

        getCoffe(items, isSubscribed);

        return () => {
            isSubscribed = false;
        }

    }, []);

    useEffect(()=> {
        getCoffe(items);
    }, [btnActive]);

    useEffect(()=> {

        let some = coffe.filter(item => item.title.toLowerCase().includes(input.toLowerCase()) || item.description.toLowerCase().includes(input.toLowerCase()));
        let copyCheck = coffeCoppy.filter(item => item.title.toLowerCase().includes(input.toLowerCase()) || item.description.toLowerCase().includes(input.toLowerCase()));

        if(input && input.length > 1){
            setCoffe(()=>{
                return copyCheck;
            }); 
        }else{
            setCoffe(coffeCoppy);
        }

        if(some.length === 0 && copyCheck.length === 0){
            setCoffe(()=>{
                return some;
            });
        }     
    }, [input]);
    
    const getCoffe = () =>{
        
        const settings = {
            type: !btnActive ? 'hot' : btnActive.toLowerCase(), 
            number: items,
            page: 5
        }

        wholeItems(settings)
            .then(onCoffeLoaded);
    }
    const onCoffeLoaded = (res) => {
        setCoffe(res);
        setCoffeeCoppy(res);
    }

    const transformDescr = (desc) => {
        const fullDescArr = desc.split(' ');
        
        let newDescArr = [];
        for(let i = 0; i < fullDescArr.length; i++){
            if(i < 30){
                newDescArr.push(fullDescArr[i])
            }else if(i === 31){
                newDescArr.push('...')
            }   
        }
        return newDescArr.join(" ");
    }

    const elements = coffe.map((item, i) => {

        let {title, description, id, urls, alt} = item;

        if(exerpt){
            description = transformDescr(description);
        }
        
        return (
            <div key={id} className="coffecard">
                <Link to={`/availability/${btnActive ? btnActive.toLowerCase() : 'hot'}/${id}`}>
                    <div className="coffecard-img">
                        <img src={urls.small} alt={alt} />
                    </div>
                    <div className="coffecard-title">
                        {title}
                    </div>
                    <div className="coffecard-descr">
                        {description}
                    </div>
                    <div className="coffecard-price">
                        {Math.floor(Math.random() * (10 - 5) + 5) + '$'}
                    </div>
                </Link>
            </div>
        )
    })

    const ErrM = error ? <ErrorMessage /> : null;
    const loadingC = loading ? <Loader /> : elements;

    return(
        <>
            {ErrM}
            {loadingC}
            {coffe.length == 0 && input ? <div>Nothing was found</div> : null}
        </>
    )
}

export default CoffeCard;