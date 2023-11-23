import React from 'react';
import './Header.css'

export default function Header() {
  return (
    <header>
      <h2 className='logo'>Meu Site</h2>
      {/* <img src='../../../assets/images/oficina-logo.png' /> */}
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li className='line'>|</li>
          <li>
            <a href="/about">Sobre</a>
          </li>
          <li className='line'>|</li>
          <li>
            <a href="/contact">Contato</a>
          </li>
          <li className='line'>|</li>
          <li>
            <a href="/profile"><span class="material-symbols-outlined">account_circle</span></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

