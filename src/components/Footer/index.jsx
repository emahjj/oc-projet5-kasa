import React from 'react'
import Logo from '../../assets/logo-white.svg'
import './Footer.css'

function Footer() {
    return (
      <footer className="footerbar">
        <div className="footer__container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="footer__container">
        <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    );
}

export default Footer