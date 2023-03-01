import "./Navbar.css";
import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from "react";

const NavBar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className="header">
      <Link to="/">
        <h1>Folio<span>.</span></h1>
      </Link>
      <ul className="nav-manu">
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/project'>Project</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? 
        (<FaTimes size = {20} style = {{color : "#fff"}}>
        </FaTimes>) : 
        (<FaBars size = {20} style = {{color : "#fff"}}>    
        </FaBars>)}
      </div>
    </div>
  )
}

export default NavBar
