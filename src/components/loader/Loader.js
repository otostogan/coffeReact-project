import img from './loader.svg';

const Loader = () =>{
    return(
        <div className="loader">
            <img src={img} alt="" style={{width:'150px', height:'150px', margin: '50px auto', display: "block"}}/>
        </div>
    )
}

export default Loader;