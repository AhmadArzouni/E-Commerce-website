import React from 'react';
import '../register.css';
import { useHistory} from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
  const [fn, setfn] = useState("");
  const [ln, setln] = useState("");
  const [p, setp] = useState("");
  const [cp, setcp] = useState("");
  const history=useHistory();
  const click=()=>{
    console.log(fn);
    console.log(ln);
    console.log(p);
    console.log(cp);
if(fn && ln && p && cp){

  if(p===cp){
    console.log(fn);
    console.log(ln);
    console.log(p);
    console.log(cp);
      history.push("/");

  }

 
}
  }

  return (
 
<div className="container">
  <form onSubmit={click}> 
  <div className="row">
    <div className="col-25">
      <label for="fname">First Name</label>
    </div>
    <div className="col-75">
      <input type="text" placeholder="Your name.."  value={fn} onChange={(e)=>setfn(e.target.value)}/>
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
  <div className="row">
    <div className="col-25">
      <label for="fname">Confirm Password</label>
    </div>
    <div className="col-75">
      <input type="password" placeholder="Confirm your password"  value={cp} onChange={(e)=>{setcp(e.target.value)}}/>
    </div>
  </div>
 
 
  <br></br>
  <div className="row">
    <input type="submit" value="Register"/>
  </div>
  </form>
</div>
  )
}
