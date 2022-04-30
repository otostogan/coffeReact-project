import {useEffect} from "react";

import './filter.scss';

const Filter = ({onBtnChange, info, onInputChange}) =>{

   
    const buttonsData = [
        {name: 'Iced'},
        {name: 'Hot'},
    ];

    const btns =  buttonsData.map((item, i)=>{

        let active = item.name === info.btnActive;

        let clazz = active ? 'filter__btn active' : 'filter__btn';

     
        return (
            <div onClick={()=> {onBtnChange(item); clearTerm()}} key={i} className={clazz}>
                {item.name}
            </div>
        )
    });

    const clearTerm = () =>{
        onInputChange('');
    }

    const onInput = (e) =>{
        onInputChange(e.target.value);
    }

    console.log();

    return (
        <div className="filter">
            <div className="filter__typing">
                <span>
                    Lookiing for
                </span>
                <input 
                    onChange={onInput}
                    value={info.input}
                    type="text"
                    className="filter__typing-input"
                    placeholder="start typing here..."/>
            </div>
            <div className="filter__btns">
                <span>
                    Or filter
                </span>
                <div className="filter__btns-wrapper">
                    {btns}
                </div>
            </div>
        </div>
    )
}

export default Filter; 