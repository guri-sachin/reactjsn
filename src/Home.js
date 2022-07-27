import {Form,Button,Container} from 'react-bootstrap';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link,Router,Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import Admin from './My/Admin';
import Login from './My/Login';
import './App.css';

import Dashboard from './My/Dashboard';
import Hotspot from './My/Hotspot';
import Edit from './My/Edit';
import  SubscriptionPlans from './My/SubscriptionPlans';
import Subscribed from './My/Subscribed';
import Transactions from './My/Transactions';
import Enquiry from './My/Enquiry';
import Blocked from './My/Blocked';
import Allhotspots from './My/Allhotspots';
import Requests from './My/Requests';
import Rejected from './My/Rejected';
import Lat from './My/Lat';


function Home()
{
   

   return(
    

 <div>
    
    

     <Routes>
            <Route exact path="/" element={<Login/>}></Route>
            <Route exact path="/Admin" element={<Admin/>}></Route>
   
            <Route exact path="/Dashboard" element={<Dashboard/>}></Route>
            <Route exact path="/Hotspot" element={<Hotspot/>}></Route>
            <Route exact path="/Edit" element={<Edit/>}></Route>
            <Route exact path="/Enquiry" element={<Enquiry/>}></Route>
            <Route exact path="/SubscriptionPlans" element={<SubscriptionPlans/>}></Route>
            <Route exact path="/Transactions" element={<Transactions/>}></Route>
            <Route exact path="/Subscribed" element={<Subscribed />}></Route>
            <Route exact path="/Blocked" element={<Blocked />}></Route>
            <Route exact path="/Allhotspots" element={<Allhotspots/>}></Route>
            <Route exact path="/Requests" element={<Requests/>}></Route>
            <Route exact path="/Rejected" element={<Rejected/>}></Route>
            <Route exact path="/Lat" element={<Lat/>}></Route>
         

</Routes>

 </div>

  
       
   );

}
export default Home;