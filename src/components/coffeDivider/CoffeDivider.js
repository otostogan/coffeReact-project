import imgbwhite from '../../assets/icons/coffe-bean.svg'
import imgblack from '../../assets/icons/coffe-bean-white.svg'
import './coffedivider.scss';

const CoffeDivider = ({type}) => {
    const beanImg = type === 'white' ? imgbwhite : imgblack ;
    return(
        <div className={`divider ${type}`}>
            <img src={beanImg} alt="Coffe bean" />
        </div>
    )
}

export default CoffeDivider;