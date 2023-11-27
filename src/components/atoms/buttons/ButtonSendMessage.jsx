import React from 'react';
import './ButtonProfile.css';

export default function ButtonSendMessage() {
  return (
    <button className="profile-button" onClick={() => alert('Alternando para o bate-papo!')}>
        <span className='span'>Enviar mensagem</span>
    </button>
  );
};