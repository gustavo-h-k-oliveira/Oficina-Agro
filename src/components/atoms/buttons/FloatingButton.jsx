import React from 'react';
import { Link } from 'react-router-dom';
import './FloatingButton.css'; // Importar o arquivo de estilos

const FloatingButton = ({ to, onClick }) => {
  return (
    <Link to={'/formulario'} className="floating-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
        <path d="M63.3334 41.1667H41.1667V63.3334H34.8334V41.1667H12.6667V34.8334H34.8334V12.6667H41.1667V34.8334H63.3334V41.1667Z" fill="white" />
      </svg>
    </Link>
  );
};

export default FloatingButton;
