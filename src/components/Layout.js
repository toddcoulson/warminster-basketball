import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import '../styles/global.css'

export default function Layout({children}){
  return (
    <>
    <Navbar />
    <div className="layout">
      
      <div className='content'>
        {children}
      </div>
    </div>
    <Footer />
    </>
  )
}