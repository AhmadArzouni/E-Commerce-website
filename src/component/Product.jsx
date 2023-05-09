import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';
import { Context,Context1 } from '../App';
import { useContext } from 'react';
export default function Product() {
  
const [counter,setcounter]=useContext(Context);

const[title,settitle]=useState("");
const[price,setprice]=useState("");
const add=(e)=>{
  e.preventDefault();
  const c=counter+1;
  setcounter(c);
  
   
    const ppp={title,price};
console.log(ppp);

fetch('http://localhost:3001/ahmad/', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ppp)
  })
 




    }
 
    const {id}=useParams();
    const [isloading, setisloading] = useState(true);
    const [product, setproduct] = useState([]);
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
<div className='product'>
  <div className='info'>
  <Skeleton width={400} height={400} />
  </div>
    <div className='info'>
    <Skeleton height={30} width={200}/>
    <br></br>
    <Skeleton height={50} width={800}/>
      <div className='rate'>
      <Skeleton height={50} width={200}/>
      
      <Skeleton height={30} width={100}/>
      </div>
      <br></br>
      <Skeleton height={30} width={100}/>
      <Skeleton height={100} width={800}/>
      <br></br>
      <div className="ahmad">
      <div className="ahmad1">
      <Skeleton height={50} width={100}/>
      </div>
      <div className="ahmad1">
      <Skeleton height={50} width={100}/>
      </div>
      </div>
     


    </div>
    </div>
    </div>
);

    };
const Showproduct=()=>{
return(
<div className='product'>
  <div className='info'>
  <img src={product.image} height="80%" width="60%" /> 
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
      <Link className="btn  btn-outline-dark" onClick={add}>Add to Cart</Link>
      <Link to='/cart' className="btn  btn-outline-dark m-2" >Go to Cart</Link>
{settitle(product.title)}
 { setprice(product.price)}
 
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
