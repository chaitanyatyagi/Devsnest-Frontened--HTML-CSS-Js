import Box from "./box";
import "./style.css"

const Board = ()=>{
    return (
        <div className="board">
            {
            [...Array(64)].map((element,index)=>{
                let COLOR="indigo";
                if((Math.floor(index/8)%2===0 && index%2===0) || (Math.floor(index/8)%2!==0 && index%2!==0))
                {
                    COLOR="black";
                }
                else
                {
                    COLOR="white"
                }

                return(
                <Box color={COLOR}/>
                )
            })
            }
        </div>
    )
}

export default Board;