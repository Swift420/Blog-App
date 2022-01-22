import React, { useContext } from 'react'
import "./topbar.css"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';




function TopBar() {
    const {user, dispatch} = useContext(Context);
    const PF = "https://blog-swift.herokuapp.com/images/"
    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }
    return (
        <div className='top'>
            <div className='topLeft'>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter-square"></i>
            <i className="topIcon fa-brands fa-pinterest-square"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link to="/" className='link'>HOME</Link>
                    </li>
                    <li className='topListItem'> <Link to="/" className='link'>ABOUT</Link></li>
                    <li className='topListItem'> <Link to="/" className='link'>CONTACT</Link></li>
                    <li className='topListItem'> <Link to="/write" className='link'>WRITE</Link></li>
                    <li className='topListItem' onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className='topRight'>
                
                {
                    user ? (
                        <Link to="/settings" className='link'><i class="fas fa-user-cog"></i>
                </Link>
                    ) : (
                        <ul className='topList'>
                            <li className='topListItem'><Link className='link' to="/login">Login</Link></li>
                            <li className='topListItem'><Link className='link' to="/register">Register</Link></li>
                        
                        
                        </ul>
                    )
                }
                
                
                
            </div>
            


        </div>
        
    )
}

export default TopBar
