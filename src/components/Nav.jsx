import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Nav.css'

function Nav() {
  const [show,setShow]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>600){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })
  return (
    <div className={`${show && 'nav-black'} nav`}><img width={'150px'} style={{backgroundColor:"transparent"}}  src="https://davidblaine.com/wp-content/uploads/2017/04/netflix-logo.png" alt="" /></div>
  )
}

export default Nav