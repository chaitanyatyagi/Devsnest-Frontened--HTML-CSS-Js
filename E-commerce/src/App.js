// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Home from "./components/HomePage";
import Home from './components/Homepage';
import Cart from './components/cart/Cart';
import Product from './components/Product';
import MenSection from './components/MenSection';
import WomenSection from './components/WomenSection';
import KidsSection from './components/KidsSection';
import './App.css';
import SearchPage from './components/SearchPage';
import Orders from './components/Orders';

function App() {
  const { cartProducts, totalQuantities, myOrders } = useSelector(
    (state) => state.cartReducer
  );

  useEffect(() => {
    localStorage.setItem('productsInCart', JSON.stringify(cartProducts));
  }, [cartProducts, totalQuantities]);
  // useEffect(() => {
  //   localStorage.setItem("Myorders1", JSON.stringify(myOrders));
  // }, [cartProducts, totalQuantities]);
  // useEffect(() => {
  //   localStorage.setItem("", JSON.stringify(cartProducts));
  // }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/men" component={MenSection} />
          <Route exact path="/women" component={WomenSection} />
          <Route exact path="/kids" component={KidsSection} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/Orders" component={Orders} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
