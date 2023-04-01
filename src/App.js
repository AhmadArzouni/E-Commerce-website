
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import AboutUs from './component/AboutUs';
import Contact from './component/Contact';
import Register from './component/Register';
import Login from './component/Login';
import Cart from './component/Cart';



function App() {
  return (
    <Router>

       <div className="home">
        
       <Navbar/>
<Switch>

  <Route exact path="/">
  <Home/>
  </Route>
  <Route  path="/Products">
  <Products/>
  </Route>
  
  <Route  path="/about">
  <AboutUs/>
  </Route>
  <Route  path="/contact">
  <Contact/>
  </Route>
  <Route  path="/register">
  <Register/>
  </Route>
  <Route  path="/login" >
  <Login/>
  </Route>
  
  <Route path="/product/:id">
  <Product/>
  </Route>
  <Route  path="/cart">
  
  <Cart/>
  
  </Route>
  

</Switch>
</div>

    </Router>
   
  );
}

export default App;
