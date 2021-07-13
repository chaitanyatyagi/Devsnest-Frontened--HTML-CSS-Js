import Cell from "./components/Cell"
import "./style.css"

function App() {
  return (
    <div className="App">
      {
        [...Array(64)].map((item,index)=>{
            let color = "indigo"
          if((Math.floor(index/8)%2===0 && index%2===0) || (Math.floor(index/8)%2!==0 && index%2!==0)){
            color="black"
          }
          else{
              color="white"
            }
            return(
                <Cell color={color}/>
              )
            })
      }
    </div>
  );
}

export default App;
