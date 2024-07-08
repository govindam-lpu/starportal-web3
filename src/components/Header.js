import React, { useState } from 'react';
import './css/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">intract.</div>
        <nav className={isMenuOpen ? 'nav-open' : ''}>
          <ul>
            <li>Compass</li>
            <li>Explore</li>
            <li className="active">
              Academy <span className="new-badge">New</span>
            </li>
            <li>NFTs</li>
            <li>For Projects</li>
          </ul>
        </nav>
        <div className="auth">
          <input type="text" placeholder="Search for ecosystems, trending quests etc.," />
          <div className="icon"></div>
          <button>Sign In</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
