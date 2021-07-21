import '../style.css'

const Card=(props)=>{

    let CARD_COLOR=props.cal>=100?"#fc7f60":"yellow";
    let TXT_COLOR=props.cal>=100?"white":"black"
    let index=props.key1;
    return <div className="card">
        <div className="title" style={{backgroundColor:CARD_COLOR,color:TXT_COLOR}}>{props.title}</div>
        <div className="content">You have consumed {props.cal} calories
        <span className="deleteBtn"><button className="btn" onClick={()=>props.func(index)}>Delete</button></span></div>
    </div>
}

export default Card;