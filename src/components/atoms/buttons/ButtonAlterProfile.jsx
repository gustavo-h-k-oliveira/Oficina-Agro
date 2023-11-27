import React from 'react';
import './ButtonProfile.css';

export default function ButtonAlterProfile() {
  return (
    <button className="profile-button" onClick={() => alert('Alternando para o formulário produto!')}>
        <span className='span'>Alterar perfil</span>
    </button>
  );
};
