import React from 'react';
import './ButtonFormProduto.css';

export default function ButtonFormProduto() {
  return (
    <button className="rounded-button" onClick={() => alert('Alternando para o formulário produto!')}>
        <span>Produto</span>
    </button>
  );
};
