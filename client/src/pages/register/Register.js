import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./register.css"
import axios from "axios"

function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)

    try {
      const res = await axios.post("/auth/register",{
        username,
        email,
        password
      });
      res.data && window.location.replace("/login")
    } catch (error) {
      setError(true)
    }

   
    
  }

  return (
  <div className='register'>
    <span className='registerTitle'>Register</span>
     <form className='registerForm' onSubmit={handleSubmit}>
     <label>Username</label>
        <input type="text" className='registerInput' placeholder="Enter your Username" onChange={e=> setUsername(e.target.value)}></input> 
        <label>Email</label>
        <input type="text" className='registerInput' placeholder="Enter your Email" onChange={e=> setEmail(e.target.value)}></input> 
        <label>Password</label>
        <input type="password" className='registerInput' placeholder="Enter your Password" onChange={e=> setPassword(e.target.value)}></input> 
        <button className='registerButton' type="submit">Register</button>
        {error && <span >Something went wrong</span>}
        
         </form>  
         <button className='loginButton'><Link className='link' to="/login">Login</Link></button>
         
         
  </div>
    
    );
}

export default Register;
