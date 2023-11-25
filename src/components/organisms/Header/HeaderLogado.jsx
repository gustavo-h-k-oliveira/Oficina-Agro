import React from 'react';
import './HeaderLogado.css'

export default function Header() {
  return (
    <header>
      <h1 className='logo'>Oficina Agro</h1>
      {/* <img src='../../../assets/images/oficina-logo.png' alt='Logo da Oficina Agro'/> */}
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

