import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from "../../Imagens/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="menu-container">
          <ul className="menu">
            <li className="menu-item">
              <Link to="/trailer" className="link">Trailer</Link>
            </li>
            <li className="menu-item">
              <a href="https://www.hbo.com/game-of-thrones" className="link">Saiba Mais</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
