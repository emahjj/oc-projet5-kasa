import React from 'react'
import Logo from '../../assets/logo-orange.svg'
import './Header.css'

function Header() {
    return (
      <nav className="navbar">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <ul className="navbar__links">
            <li><a className="navbar__link" href="/">Accueil</a></li>
            <li><a className="navbar__link" href="/about">À propos</a></li>
        </ul>
      </nav>
    );
}

export default Header