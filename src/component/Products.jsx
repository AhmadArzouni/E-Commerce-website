import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

export default function Products() {
  const [Filter, setFilter] = useState("");
  const [Data, setData] = useState("");

  const [ispending, setispending] = useState(true);
  let com = true;
const filterproducts=(cat)=>{
  console.log("ahmad");
  console.log(Data);
  const d=Data.filter((x)=>x.category===cat);
  setFilter(d);
  

}
  const Loading = () => {
    return(
      <>
      
       <div className="ahmad">
      <div className="col-md-3">
              <div class="card1 h-100 text-center p-4 ">
                
                <div class="card-body">
                  
                  
                <Skeleton height={200} width={180}/>
                  
                </div>
              </div>
            </div> 
            <div className="col-md-3">
              <div class="card1 h-100 text-center p-4 ">
                
                <div class="card-body">
                  
                  
                <Skeleton height={200} width={180}/>
                  
                </div>
              </div>
            </div> 
            <div className="col-md-3">
              <div class="card1 h-100 text-center p-4 ">
                
                <div class="card-body">
                  
                  
                <Skeleton height={200} width={180}/>
                  
                </div>
              </div>
            </div> 
            <div className="col-md-3">
              <div class="card1 h-100 text-center p-4 ">
                
                <div class="card-body">
                  
                  
                <Skeleton height={200} width={180}/>
                  
                </div>
              </div>
            </div> 
          
         
            </div>

    

     
      
      
    </> 
    );
  };
  const Showproducts = () => {
    return (
      <>
        <div className="products d-flex justify-content-center">
          <button className="btn btn-outline-dark m-1"  onClick={()=>{setFilter(Data)}}>All</button>
          <button className="btn btn-outline-dark m-1" onClick={()=>{filterproducts("men's clothing")}}>Men's Clothing</button>
          <button className="btn btn-outline-dark m-1"  onClick={()=>{filterproducts("women's clothing")}}>Women's Clothing</button>
          <button className="btn btn-outline-dark m-1" onClick={()=>{filterproducts("jewelery")}}>
            Jewelery Clothing
          </button>
          <button className="btn btn-outline-dark m-1" onClick={()=>{filterproducts("electronics")}}>
            Electronic Clothing
          </button>
        </div>
<div className="row">
        {Filter.map((product) => {
        
          return (
            <div className="col-md-3">
              <div class="card1 h-100 text-center p-4 " key={product.id}>
                <img src={product.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{product.title.substring(0,12)}</h5>
                  <p class="card-text">${product.price}</p>
                  <Link to={`/product/${product.id}`} class="btn  btn-outline-dark">
                    Buy
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </>
    );
  };
  useEffect(() => {
    const getproducts = async () => {
      setispending(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (com) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setispending(false);
        console.log(Filter);
      }
      return () => {
        com = false;
      };
    };

    getproducts();
  }, []);
  return (
    <div>
      <div className="title">
        <h1 className="title display-6 fw-bolder text-center">
          Latest Products <hr />
        </h1>
       
      </div>
      {!ispending && <Showproducts />}
      {ispending && <Loading />}
    </div>
  );
}
