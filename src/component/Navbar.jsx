import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light shadow-sm">
  <div class="container">
    <a class="navbar-brand fw-bold fs-4" href="#">La Collection</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
       
      </ul>
     <div className="Buttons">
        
    <Link to='/login' className='btn btn-outline-dark ms-2'><i class="fa fa-sign-in" aria-hidden="true"></i> Login</Link>
    <Link to='register' className='btn btn-outline-dark ms-2'><i class="fa fa-registered" aria-hidden="true"></i> Register</Link>
    <Link to='cart' className='btn btn-outline-dark ms-2'><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart (0)</Link>
    
     </div>
    </div>
  </div>
</nav>
    </div>
  )
}
