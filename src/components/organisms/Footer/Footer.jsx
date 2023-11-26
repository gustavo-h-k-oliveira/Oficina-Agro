import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p className='site-info'>Oficina Agro™<br />© 2021 - 2023</p>
      <div className='footer-items'>
        <a href='privacy'>Políticas de Privacidade</a>
        <a href='terms'>Termos de Uso</a>
        <a href='faq'>FAQ</a>
      </div>
    </footer>
  );
};

export default Footer;