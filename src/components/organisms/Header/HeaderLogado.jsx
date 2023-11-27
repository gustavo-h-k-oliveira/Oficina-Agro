import React from 'react';
import './HeaderLogado.css';
import image from '/workspace/Oficina-Agro/src/assets/images/oficina-logo.png';

export default function Header() {
  return (
    <header>
      <img src={image} className='logo' alt='Logo do site' />
      <nav>
        <ul>
          <li className='header-item1'>
            <a href="/">Painel de controle</a>
          </li>
          <li className='line'>|</li>
          <li>
            <a href="/about">Histórico de manutenções</a>
          </li>
          <li className='line'>|</li>
          <li>
            <a href="/contact">Relatório</a>
          </li>
          {/* <li className='line'>|</li> */}
          {/* <li>
            <a href="/profile"><span class="material-symbols-outlined">account_circle</span></a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

