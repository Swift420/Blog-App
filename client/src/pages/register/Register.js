import React from 'react';
import { Link } from 'react-router-dom';
import "./register.css"


function Register() {
  return (
  <div className='register'>
    <span className='registerTitle'>Register</span>
     <form className='registerForm'>
     <label>Username</label>
        <input type="text" className='registerInput' placeholder="Enter your Username"></input> 
        <label>Email</label>
        <input type="text" className='registerInput' placeholder="Enter your Email"></input> 
        <label>Password</label>
        <input type="password" className='registerInput' placeholder="Enter your Password"></input> 
        <button className='registerButton'>Register</button>
        
        
         </form>  
         <button className='loginButton'><Link className='link' to="/login">Login</Link></button>
         
  </div>
    
    );
}

export default Register;
