import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

import CoffeService from '../../services/coffeApi'

import Banner from '../sections/banner/Banner';
import DescSingleCoffe from '../sections/descSingleCoffe/DescSingleCoffe';
import Loader from '../loader/Loader';

import bannerBg from  '../sections/banner/about-banner.jpg';


const SingleCoffe = (props) =>{

    const {availabilityID, type} = useParams();

    const {loading, error, getCoffe} = CoffeService();

    const [coffe, setCoffe] = useState([]);

    useEffect(() =>{
        getCoffeF();
    }, []);

    const getCoffeF = () =>{
        getCoffe(type, availabilityID)
            .then(onCoffeLoaded)
    }
    const onCoffeLoaded = (res) => {
        setCoffe(res);
    }

    const {page} = props;

    const BannerSet = {
        title: coffe.title,
        bg: bannerBg
    }
    
    return (
        <div className={page}>
            <Banner info={BannerSet}/>
            {loading ? <Loader/> : <DescSingleCoffe coffe={coffe}/>}
        </div>
    )
}

export default SingleCoffe;