
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
import { createContext } from 'react';
import { useState } from 'react';

export const Context=createContext(null);


function App() {
  const [counter,setcounter]=useState(7);
  return (
    <Router>

       <div className="home">
        <Context.Provider value={[counter,setcounter]}>
        <Navbar/>
        </Context.Provider>
       
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
  <Route  path="/cart">
  <Cart/>
  </Route>
  <Context.Provider value={[counter,setcounter]}>
  <Route path="/product/:id">
  <Product/>
  </Route>
  </Context.Provider>
 

  

</Switch>
</div>

    </Router>
   
  );
}

export default App;
