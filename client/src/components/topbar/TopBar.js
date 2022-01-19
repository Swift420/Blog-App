import React from 'react'
import "./topbar.css"
import styled from 'styled-components'
import { Link } from 'react-router-dom'




function TopBar() {
    const user = false;
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
                    <li className='topListItem'>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className='topRight'>
                {
                    user ? (
                        <img 
                className='topImg'
                src='https://c4.wallpaperflare.com/wallpaper/221/96/957/the-mandalorian-star-wars-grogu-hd-wallpaper-preview.jpg'></img>
                    ) : (
                        <ul className='topList'>
                            <li className='topListItem'><Link className='link' to="/login">Login</Link></li>
                            <li className='topListItem'><Link className='link' to="/register">Register</Link></li>
                        
                        
                        </ul>
                    )
                }
                
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
            


        </div>
        
    )
}

export default TopBar
