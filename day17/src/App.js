import "./style.css"
import Block from "./components/Block";

function App() {
  return (
    <div className="App">
      <div className="instructions">
        <h3>INSTRUCTIONS</h3>
        <br />
        <br />
        <li>build a container</li>
        <li>create a seperate function and use it as a component</li>
        <li>pass props "calory and food" and call it to main component</li>
        <br />
        <br />
        <h1>CALORIE READ ONLY</h1>
      </div>
    <div className="scroll">
      <Block name = "CHOLE BHATURE" number = "250"/>
      <Block name = "PIZZA" number = "280"/>
      <Block name = "BURGER" number = "150"/>
      <Block name = "NOODLES" number = "180"/>
      <Block name = "MOMOS" number = "80"/>
      <Block name = "ICE-CREAM" number = "100"/>
    </div>
    </div>
  );
}

export default App;
