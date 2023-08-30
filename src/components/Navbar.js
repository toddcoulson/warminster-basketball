import {Link} from 'gatsby'
import React, {useState} from 'react'

//import logo from "../images/wbaLogo.png";



export default function Navbar(){
  const [toggleBurger, setToggleBurger] = useState(false)

  return (
    <nav>
    <img className="logo" src='/wbaLogo.png'/>
      <div className={`links ${toggleBurger? ' active' : ''}`}>
      
        <Link activeClassName="active" to="/announcements">Announcements</Link>
        <Link activeClassName="active" to="/information">Information</Link>
        <Link activeClassName="active" to="/registration">Registration</Link>
        <Link activeClassName="active" to="/clearances">Clearances</Link>
      </div>
      <div className={`hamburger ${toggleBurger? ' active' : ''}`} onClick={()=> setToggleBurger(!toggleBurger)}>
        <span className='bar'/>
        <span className='bar'/>
        <span className='bar'/>
      </div>
    </nav>
  )
};

