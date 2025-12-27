function Image(props) {
    return (
        <img src={props.name} alt={props.alt} className="imageCom" />
    )
}

export default Image;