import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/cart/Cart";
import Home from "./components/Homepage";
import Product from "./components/Product";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
