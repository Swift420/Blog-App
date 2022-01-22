import React from 'react';
import "./header.css"


function Header() {
  return <div className='header'>
     <div className='headerTitles'>
         <span className='headerTitleSm'>React & Node</span>
         <span className='headerTitleLg'>Blog</span>

     </div>
     <img className='headerImg' src="https://i.pinimg.com/originals/b9/14/b5/b914b59ab5c248bcc26258424676367d.png"></img>
  </div>;
}

export default Header;
