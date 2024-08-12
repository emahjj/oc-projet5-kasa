import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-orange.svg'
import './Header.scss'

function Header() {
    return (
      <nav className="navbar">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="navbar__links">
            <Link className="navbar__link" to="/accueil">Accueil</Link>
            <Link className="navbar__link" to="/apropos">À propos</Link>
        </div>
      </nav>
    );
}

export default Header