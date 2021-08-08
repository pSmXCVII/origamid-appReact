import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">
        Produtos
      </Link>
      <Link to="contato" className="nav-item">
        Contato
      </Link>
    </nav>
  )
}

export default Header
