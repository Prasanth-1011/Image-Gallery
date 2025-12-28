function Image(props) {
    return (
        <>
            <img src={props.name} alt={props.alt} className="imageCom" />
        </>
    )
}

export function ImageDetail(props) {
    return (
        <>
            <img src={props.name} alt={props.alt} className="imageCom" />
            <h3>{props.alt}</h3>
            <h3>{props.description}</h3>
        </>
    )
}

export default Image;