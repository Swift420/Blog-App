import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css"


function Login() {
  return (
  <div className='login'>
    <span className='loginTitle'>Login</span>
     <form className='loginForm'>
        <label>Email</label>
        <input type="text" className='loginInput' placeholder="Enter your email"></input> 
        <label>Password</label>
        <input type="password" className='loginInput' placeholder="Enter your password"></input> 
        <button className='loginButton1'>Login</button>
        
        
         </form>  
         <button className='loginRegisterButton'><Link className='link' to="/register">Register</Link></button>
         
         
  </div>
    
    );
}

export default Login;
