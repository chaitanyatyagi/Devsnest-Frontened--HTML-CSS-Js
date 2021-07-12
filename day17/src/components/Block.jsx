const Block = (props) =>{
    return(
        <div className="Block">
            <h2>{props.name}</h2>
            <h4>You have consumed {props.number} claories today.</h4>
        </div>
    )
}

export default Block;