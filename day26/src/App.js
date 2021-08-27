import Body from "./component/Body";
import store from "./redux/store";
import {Provider} from 'react-redux'

function App() {
  return (
    // <Provider store = {store}>
      <div className="App">
      <Body />
    </div>
    // </Provider>
  );
}

export default App;
