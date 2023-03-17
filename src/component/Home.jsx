import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div class="card text-bg-dark text-white border-0">
        <img src="/assets/violet.jpg" class="card-img" alt="..." />
        <div class="card-img-overlay d-flex flex-column ">
          <h5 class="card-title fw-bolder display-3">NEW SEASON ARRIVALS</h5>
          <p class="card-text fs-3">
            CHECK OUT ALL THE TRENDS!!
          </p>
        
        
        </div>
        
      </div>
      <Products/>
    </div>
  );
}
