
import Axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import { Route, Link, Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';


import './App.css';
import {Form,Button,Navbar,Nav,Container,Carousel,Table} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';







function Edit()
{
    const  [id, setId] =useState('');
  const  [title, setTitle] =useState('');
  const  [description, setDescription] =useState('');
  const  [amount, setAmount] =useState('');
  const  [duration, setDuration] =useState('');

  const [product,setProducts] =useState([]);
  const navigate = useNavigate();


  function handelDemo1(e)
  {
    setTitle(e.target.value);

  }

 function handelDemo2(e)
 {
  setDescription(e.target.value);
    
 }

 function handelDemo3(e)
 {
  setAmount(e.target.value);

 }
 function handelDemo4(e)
 {
   setDuration(e.target.value);

 }

 useEffect(
    ()=>{
          Axios.get("http://3.101.23.81:3306/plan").then(
              res=> setProducts(res.data));

    },[]);


    
    function onEdit(e){
        const id = e.target.id;
        Axios.get(`http://3.101.23.81:3306/edi/${id}`).then(
            res =>{
                     setId(res.data[0].id);
                     setTitle(res.data[0].title);
                     setDescription(res.data[0].description);
                     setAmount(res.data[0].amount);
                     setDuration(res.data[0].duration);

                     console.log(res.data);
                     console.log(res.data[0].amount);
            });
    }



 function Saveproduct(e){

  var data ={"id":id,"title":title,"description":description,"amount":amount,"duration":duration};
console.log(data);
   Axios.post("http://3.101.23.81:3306/updat",data).then(
       res=> console.log(res)
     )
     navigate("/SubscriptionPlans");
        };


return(
    <div>
         {/* <!-- Page Wrapper --> */}
<div id="wrapper" >





      

{/* <!-- Sidebar --> */}
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
{/* 
  <!-- Sidebar - Brand --> */}
  <a class="sidebar-brand d-flex align-items-center justify-content-center" href={"Admin"}>
    
    <div class="sidebar-brand-icon ">
     LOGO
    </div>
  </a>
  <hr class="sidebar-divider my-0"/>
  <hr class="sidebar-divider"/>

{/* 
  
  <!-- Nav Item - Pages Collapse Menu --> */}
  <li class="nav-item">
    <a class="nav-link" href={"Dashboard"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Dashboard </span></a>
  </li>
  
  <li class="nav-item">
    <a class="nav-link collapsed" href="users.html" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
      <i class="fas fa-fw fa-cog"></i>
      <span>Users</span>
    </a>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        
        <a class="collapse-item" href={"Subscribed"}>Subscribed Users</a>
        <a class="collapse-item" href={"Blocked"}>Blocked Users</a>
       
        
        
        
      </div>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link collapsed" href="users.html" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
      <i class="fas fa-fw fa-cog"></i>
      <span>Hotspot</span>
    </a>
    <div id="collapseFour" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        
        <a class="collapse-item" href={"Hotspot"}>Add Hotspot</a>
        <a class="collapse-item" href={"Allhotspots"}>All Hotspots</a>
        <a class="collapse-item" href={"Requests"}>Hotspot Requests</a>
        <a class="collapse-item" href={"Rejected"}>Rejected Hotspots</a>
       
        
        
        
      </div>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={"SubscriptionPlans"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Subscription Plans</span></a>
  </li>
  
   <li class="nav-item" >
    <a class="nav-link" href={"Transactions"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Transactions History</span></a>
  </li>
  
  
  
  <li class="nav-item" >
    <a class="nav-link" href={"Enquiry"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Enquiry</span></a>
  </li>
  <li class="nav-item" >
    <a class="nav-link" href={"Lat"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Location</span></a>
  </li>
{/* 
  <!-- Nav Item - Utilities Collapse Menu --> */}
  

  {/* <!-- Divider --> */}
  

  
 

 {/*  <!-- Sidebar Toggler (Sidebar) --> */}
  <div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
  </div>
</ul>

{/* 
<!-- Content Wrapper --> */}
    <div id="content-wrapper" class="d-flex flex-column">

     {/*  <!-- Main Content --> */}
      <div id="content">

        {/* <!-- Topbar --> */}
        <header>
        <nav class="navbar navbar-expand navbar-dark bg-dark topbar mb-4 static-top shadow">

         {/*  <!-- Sidebar Toggle (Topbar) --> */}
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

         {/*  <!-- Topbar Search --> */}
          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
              <div class="input-group-append">
                <button class="btn btn-primary an" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

       {/*    <!-- Topbar Navbar --> */}
          <ul class="navbar-nav ml-auto">

         {/*    <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
             {/*  <!-- Dropdown - Messages --> */}
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                      <button class="btn btn-primary an" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

         {/*    <!-- Nav Item - Alerts -->
            

            <!-- Nav Item - Messages -->
            

            

            <!-- Nav Item - User Information --> */}
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small am">Anil Singh</span>
                <img class="img-profile rounded-circle" src={"ser8.jpg"}/>
                &nbsp; &nbsp;
                <button type="button" class="btn btn-primary an1">Logout</button>
              </a>
            {/*   <!-- Dropdown - User Information --> */}
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                
                
                
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>
            

          </ul>

        </nav>
        </header>
       
        <div class="container-fluid">

       {/*    <!-- Page Heading --> */}
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Edit plans</h1>
            
          </div>

    <form>
    <div class="row">
 <div class="col-md-2" >Title</div>
 
    
    <div class="col-md-10">
      <input type="text"  class="form-control" name="Title"  placeholder="Title" id="title" required onChange={handelDemo1} value={title}/>
    </div>
  
</div>

<div class="row">
 <div class="col-md-2">Description</div>
 
    
    <div class="col-md-10">
      <input type="description" class="form-control" id="Input" placeholder="Description" onChange={handelDemo2} value={description}/>
    </div>
  
</div>



<div class="row">
 <div class="col-md-2">Amount</div>
 
    
    <div class="col-md-10">
      <input type="text"  class="form-control" name="product_name"  placeholder="Amount" id="Location" required onChange={handelDemo3} value={amount}/>
    </div>
  
    <div class="row">

</div>
</div>

 <div class="row">
<div class="col-md-2"></div>
<div class="col-md-10"><Button  type="button" onClick={Saveproduct}  >Submit</Button></div>
</div>

    </form>
    <hr></hr>
                      <Table striped borderd hover>
                          <thead>
                              <th>Title</th> <th>Description</th><th>Amount</th><th>Duration</th><th>Action</th>
                          </thead>
                          <tbody>
                                  {product.map((item,index)=>{
                                      return(
                                          <tr key={index}>
                                              <td>{item.title}</td>
                                              <td>{item.description}</td>
                                              <td>{item.amount}</td>
                                              <td>{item.duration}</td>
                                              <td><Button variant="success" type="button" id={item.id} onClick={onEdit}>Edit</Button></td>
                                          </tr>
                                          
                                      );
                                  })}
                                   
                          </tbody>
                      </Table>
   
    </div>






</div> 
        

      

<footer class="sticky-footer bg-dark">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>&copy; Mobile App @ All right reserved</span>
          </div>
        </div>
      </footer>

</div>

<a class="scroll-to-top rounded" href="Hotspot">
    <i class="fas fa-angle-up"></i>
  </a>
</div>










    
    
   








     

   </div>    


 

  
       
   );

}
export default Edit;