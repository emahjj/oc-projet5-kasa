import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-orange.svg'
import './Header.css'

function Header() {
    return (
      <nav className="navbar">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <ul className="navbar__links">
            <li><Link className="navbar__link" to="/accueil">Accueil</Link></li>
            <li><Link className="navbar__link" to="/apropos">À propos</Link></li>
        </ul>
      </nav>
    );
}

export default Header