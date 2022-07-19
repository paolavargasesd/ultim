import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.scss'

const NavBar = () => {
  return (
    <header className='container__NavBar'>
        <nav className='container__NavBar-navBar'>
            <span><img className='container__NavBar-navBar-iconNavBar' src="../assets/controlRoom/Group 12-1.png" alt="iconRocket"/>The Last Mission</span>
            <Link to="/controlroom">Control Room</Link>
        </nav>  
    </header>
  )
}

export default NavBar