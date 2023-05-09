import React from 'react';
import { useContext } from 'react';
import { Context1 } from '../App';
import { AiFillStar } from 'react-icons/ai';
import { useState,useEffect } from 'react';

export default function Cart() {
    
    const[product,setproduct]=useState([]);
    
  
 
useEffect(() => {
    
  
      const fetchData = async() => {
      
         
        const response = await fetch("http://localhost:3001/ahmad");
        console.log(response);
        const json = await response.json();
        console.log(json);
        setproduct(json);
        console.log("ahmad")
        console.log(product)
      
      }
  
      fetchData();
  },[]);

const del=()=>{
console.log("ahmad loves assil");


}
 
 
    


  return (
  <div>
{product.map((value)=>{

  return(
    <div key={value.id}>
 
              <div className="card1 h-100 text-center p-4 " key={value.id}>
                <img src={value.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{value.title.substring(0,12)}</h5>
                  <p className="card-text">${value.price}</p>
                  
                  <button onClick={del}>Delete</button>
    </div>
    </div>
    </div>
    )
})}

  </div>
  
  )
}
