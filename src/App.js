
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';

function App() {
  return (
    <Router>

       <div className="home">
       <Navbar/>
<Switch>

  <Route exact path="/">
  <Home/>
  </Route>
  <Route exact path="/Products">
  <Products/>
  </Route>
  <Route path="/product/:id">
  <Product/>
  </Route>


</Switch>
</div>

    </Router>
   
  );
}

export default App;
