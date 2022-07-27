import {Form,Button,Container} from 'react-bootstrap';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import Admin from './Admin';

import './App.css';


function Login()
{
    const  [username, setUsername] =useState('');
    const  [password, setPassword] =useState('');
     const navigate = useNavigate();

    function handelDemo1(e)
    {
        setUsername(e.target.value);

    }
   function handelDemo2(e)
   {
       setPassword(e.target.value);
   }
    
   async function mysubmit()
   {
       const data ={"username":username,"password":password};
       const config = {
           method :'POST',
           headers:{
           'Accept':'application/json',
           'Content-Type':'application/json',
        },
           body: JSON.stringify(data)
        }
        console.log(data);
   const response = await fetch ('http://3.101.23.81:3306/login',config)
   const json = await response.json();
     console.log(json);


   if(json.length === 0){
       console.log("invalid useer try again");
       alert("invalid useer try again");
   }
   else if (json [0].type =="admin"){
       console.log("welcome admin");
       navigate("/Admin");
   }

 else if (json [0].type =="customer"){
       console.log("welcome customer");
       localStorage.setItem("cname",username);
       navigate("/Custmer");
   }
   
   }

   return(
    
   
    <div class="L">
           
           <h1 text align="center">Admin Login</h1>
           <form>
   
        
   <div class="form-group">
     <label for="exampleInputEmail1">Email address</label>
     <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" onChange={handelDemo1}/>
     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
   </div>
   <div class="form-group">
     <label for="exampleInputPassword1">Password</label>
     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handelDemo2}/>
   </div>
   <div class="form-check">
     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
     <label class="form-check-label" for="exampleCheck1">Check me out</label>
   </div>
   <button type="submit" class="btn btn-secondary bl2" id="P" onClick={mysubmit}>Submit</button>
 
 </form>

        
<Routes>
 <Route path="/Admin" element={<Admin/>}></Route>
 </Routes>

       </div>
   );

}
export default Login;