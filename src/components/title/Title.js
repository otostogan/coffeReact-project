import './title.scss';

export const Title = (props) =>{
    return(
        <h1 className="title">{props.children}</h1>
    )
}
export const TitleSecondary = (props) =>{
    return(
        <h2 className="title-secondary">{props.children}</h2>
    )
}

// export default Title;