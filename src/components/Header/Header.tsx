import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Style.css'

function Header({  }) {
  const location = useLocation();

  return (
    <nav className='navbar'>
      <div className='navbar-section'>
        <NavLink to={'/'} className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`}>Dashboard</NavLink>
        <NavLink to={'/virus'} className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`}>Virus</NavLink>
      </div>

      <div className='navbar-section'>
        <div className='navbar-item'>Logout</div>
      </div>
    </nav>
  )
}

export default Header;