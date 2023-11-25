import React from 'react';
import './ButtonFormSection.css';

export default function ButtonFormSection() {
  return (
    <button className="button-section" onClick={() => alert('Alternando para o formulário seção!')}>
        <span>Seção</span>
    </button>
  );
};
