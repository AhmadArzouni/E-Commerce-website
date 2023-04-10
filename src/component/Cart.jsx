import React from 'react';
import { useContext } from 'react';
import { Context1 } from '../App';
import { AiFillStar } from 'react-icons/ai';

export default function Cart() {
    const [p,setp]=useContext(Context1);

  return (
  <div>
<h2>{p.title}</h2>
<p>{p.rate}<AiFillStar/></p>
<b>{p.price}$</b>



  </div>
  )
}
