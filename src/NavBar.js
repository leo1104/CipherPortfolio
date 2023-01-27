import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'



function NavBar() {
  return (
    <div>
      <Link to={'/about'}>about</Link>
    </div>
  )
}
//make 3 components which should be functional componenets and integrate those with App.js file
// and show me the output
export default NavBar