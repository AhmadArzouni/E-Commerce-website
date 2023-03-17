import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';

export default function Product() {
    const {id}=useParams();
    const [isloading, setisloading] = useState(true);
    const [product, setproduct] = useState("");
    useEffect(() => {
        const getproducts = async () => {
            setisloading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
           
              
              setproduct(await response.json());
              setisloading(false);
              
            }
           
          
      
          getproducts();
    }, []);
const Loading = () => {

return(
    <div className='loading'>
<Skeleton height={400}/>
    Loading...
    </div>
);

    };
const Showproduct=()=>{
return(
<div className='product'>
  <div className='info'>
  <img src={product.image} height="400px" width="400px" /> 
  </div>
    <div className='info'>
{console.log(product)}
      <h3>{product.category}</h3>
      <h1>{product.title}</h1>
      <div className='rate'>
     <b>Rating {product.rating.rate}<AiFillStar/></b> 
      </div>
      <br></br>
      <h2><b>$ {product.price}</b></h2>
      <p>{product.description}</p><br></br>
      <Link to="/" class="btn  btn-outline-dark">Add to Cart</Link>
      <Link to="/cart" class="btn  btn-outline-dark m-2">Go to Cart</Link>


    </div>
    </div>
    
);


}





  return (
    <div>
{isloading?<Loading/>:<Showproduct/>}

    </div>
  )
}
