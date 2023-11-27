import React from 'react';
import './ButtonProfile.css';

export default function ButtonSendMessage() {
  return (
    <button className="profile-button" onClick={() => alert('Alternando para o formulário produto!')}>
        <span className='span'>Enviar mensagem</span>
    </button>
  );
};