import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main>
        <Nav />
        <Outlet/>
    </main>
  )
}

export default Layout