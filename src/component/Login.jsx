import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const [fn, setfn] = useState("");
  const [ln, setln] = useState("");
  const [p, setp] = useState("");
    const history=useHistory();
    const ahmad=()=>{
      if(fn && ln && p ){

        console.log("ahmad");
history.push('/');
      }


    }
  return (
    <div className="container">
    <form onSubmit={ahmad}> 
    <div className="row">
      <div className="col-25">
        <label for="fname">First Name</label>
      </div>
      <div className="col-75">
        <input type="text" placeholder="Your name.."  value={fn} onChange={(e)=>{setfn(e.target.value)}}/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div className="col-75">
        <input type="text" placeholder="Your last name.."  value={ln} onChange={(e)=>{setln(e.target.value)}}/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="fname">Password</label>
      </div>
      <div className="col-75">
        <input type="password" placeholder="Your password"  value={p} onChange={(e)=>{setp(e.target.value)}}/>
      </div>
    </div>
  
   
   
    <br></br>
    <div className="row">
      <input type="submit" value="Login"/>
    </div>
    </form>
  </div>
    )
  }
  