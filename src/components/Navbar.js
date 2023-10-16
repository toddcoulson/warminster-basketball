import {Link} from 'gatsby'
import React, {useState} from 'react'
import { StaticImage } from "gatsby-plugin-image"

//import logo from "../images/wbaLogo.png";

export default function Navbar(){
  const [toggleBurger, setToggleBurger] = useState(false)
  
  return (
    <nav>
    <StaticImage
        className="logo"
        src="../images/wbaLogo.png"
        alt="Warminster Basketball logo"
        placeholder="blurred"
        layout="fixed"
        width={200}
        aspectRatio={1/1}
      />
      <div className={`links ${toggleBurger? ' active' : ''}`}>
      
        <Link activeClassName="active" to="/announcements">Announcements</Link>
        <Link activeClassName="active" to="/information">Information</Link>
        <Link activeClassName="active" to="/registration">Registration</Link>
        <Link activeClassName="active" to="/clearances">Clearances</Link>
        <Link activeClassName="active" to="/schedules">Schedules</Link>
        
      </div>
      <div className={`hamburger ${toggleBurger? ' active' : ''}`} onClick={()=> setToggleBurger(!toggleBurger)}>
        <span className='bar'/>
        <span className='bar'/>
        <span className='bar'/>
      </div>
    </nav>
  )
};

