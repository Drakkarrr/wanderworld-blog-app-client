import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
   <>
      <header>
          <a href="/" className='logo'>My Blog</a>
          <nav>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </nav>
        </header>
   </>
  )
}

export default Nav