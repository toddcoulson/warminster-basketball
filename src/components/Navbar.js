import {Link} from 'gatsby'
import React from 'react'

export default function Navbar(){
  return (
    <nav>
      <div className="links" >
        <Link to="/announcements">Announcements</Link>
        <Link to="/information">Information</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/clearances">Clearances</Link>
      </div>
    </nav>
  )
};