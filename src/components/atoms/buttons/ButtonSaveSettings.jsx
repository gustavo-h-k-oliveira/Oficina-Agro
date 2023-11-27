import React from 'react';
import './ButtonProfile.css';

export default function ButtonSaveSettings() {
  return (
    <button className="profile-button" onClick={() => alert('Alternando para o formulário produto!')}>
        <span className='span'>Salvar alterações</span>
    </button>
  );
};