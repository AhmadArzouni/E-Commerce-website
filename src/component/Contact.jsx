import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
export default function Contact() {
  const history=useHistory();
    const [name, setname] = useState("ahmad");
    const [email, setemail] = useState("developer@javascript.com");
    const [message, setmessage] = useState("");
    const click=()=>{
setname("");
setemail("");
setmessage("");
setTimeout(() => {
  history.push("/");
}, 1000);



    }
  return (
    <div className='cn'>
        <>.</>
    <div className='title'>
        <h1 >Contact Us</h1>
        <br></br>
        <br></br>
        <br></br>
        <div className='row'>
        <div className='col'>
<h3>Get in touch</h3>
<br></br>
<small><b>Email: developer@javascript.com</b></small><br></br><br></br>
<small><b>Phone: +961 XXX XXX</b></small><br></br><br></br>
<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
     ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</small>
     </div>
     <div className='col'>
       <div className='v'> <input type={Text} placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)}>
        </input><input type={Text} placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}></input></div> 
       <textarea placeholder='Message' value={message} onChange={(e)=>setmessage(e.target.value)}></textarea>
       <button onClick={click}>Send</button>
        </div>
        </div>
        </div>
        </div>
  )
}
