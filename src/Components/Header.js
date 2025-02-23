import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
const Header = () => {
  return (
    <>
  <Navbar />
  <Outlet />
  </>
  )
}

export default Header