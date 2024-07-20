function Cards(props){
    return <div className="cards">
        <div className={props.cName}>{props.svg}</div>
        <h2>{props.cash}</h2>
        <h3>{props.title}</h3>
    </div>
}
export default Cards;