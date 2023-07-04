import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from "../../Imagens/Logo.png";


const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="menu">
      
          <Link to="/" className="logo-link">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
          <li className="menu-item"><Link to="/trailer" className="link">Trailer</Link></li>
          <li className="menu-item"><a href="https://www.hbo.com/game-of-thrones" className="link">Saiba Mais</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
