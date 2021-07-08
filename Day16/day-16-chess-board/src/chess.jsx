const Box =()=>{
    return(
        <div className="box">

        </div>
    )
}

const BoxRow=()=>{
    return(
        <div className="row">
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
        </div>
    )
}



const Board =()=>{
    return(
    <div className="board">
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
    </div>
    )
}

export default Board;