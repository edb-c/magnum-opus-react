import React from 'react';
import logo from '../assets/logo.png'; // Tell Webpack this JS file uses this image
import '../assets/Header.css'

function Header() {
  return (
  <img src={logo} className="Header-logo" alt="logo"/>
  )
}
export default Header;