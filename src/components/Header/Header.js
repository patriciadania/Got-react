import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="menu">
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/characters" className="link">Personagens</Link></li>
          <li><Link to="/trailer" className="link">Trailer</Link></li>
          <li><a href="https://www.hbo.com/game-of-thrones" className="link">Saiba Mais</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
