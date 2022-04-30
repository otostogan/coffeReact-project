const TextA = (props) =>{
    
    return (
        <div className="text-a">
            {
                props.children.map(item => item)
            }
        </div>
    )
}

export default TextA;