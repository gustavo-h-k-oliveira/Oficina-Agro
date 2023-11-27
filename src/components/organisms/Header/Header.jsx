import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import image from '/workspace/Oficina-Agro/src/assets/images/oficina-logo.png';

export default function Header() {
  return (
    <header className='header-home'>
      <nav className='nav-home'>
        <img src={image} className='logo' alt='Logo do site' />
        <ul>
          {/* <li>
            <a href="/">Home</a>
          </li>
          <li className='line'>|</li> */}
          <li>
            <a href="/about">Sobre</a>
          </li>
          <li className='line'>|</li>
          <li>
            <a href="/contact">Contato</a>
          </li>
          <li className='line'>|</li>
          <li>
            <Link to="/configuracoes"><span class="material-symbols-outlined">account_circle</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};