import {Link} from 'gatsby'
import React from 'react'

export default function Navbar(){
  return (
    <nav>
      <div className="links" >
        <Link activeClassName="active" to="/announcements">Announcements</Link>
        <Link activeClassName="active" to="/information">Information</Link>
        <Link activeClassName="active" to="/registration">Registration</Link>
        <Link activeClassName="active" to="/clearances">Clearances</Link>
      </div>
    </nav>
  )
};