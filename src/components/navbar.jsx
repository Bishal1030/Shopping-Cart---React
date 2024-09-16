import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navbar.css'

export default function Navbar() {
  return (
  <div className="navbar">
    <div className="links">
        <Link to='/'>Shop</Link>
        <Link to='/cart'><ShoppingCartIcon/></Link>
    </div>
  </div>
  )
}


