import React, { useState } from 'react';
import logo from '../img/logo.png'
import './Header.css';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <button 
        className="menu-mobile" 
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {menuAberto ? '✕' : '☰'}
      </button>

      <nav className={`nav ${menuAberto ? 'active' : ''}`}>
        <a href="#catalogo" onClick={() => setMenuAberto(false)}>Catalogo</a>
        <a href="#faq" onClick={() => setMenuAberto(false)}>Perguntas Frequentes</a>
        <a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a>
      </nav>
    </header>
  );
};

export default Header;