import React from 'react';
import './ButtonProfile.css';

export default function ButtonAlterProfile() {
  return (
    <button className="profile-button" onClick={() => alert('Botão clicado!')}>
        <span className='span'>Alterar perfil</span>
    </button>
  );
};
