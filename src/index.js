import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import Formulario from './pages/Formulário/Formulario';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Dashboard from './pages/Dashboard/Dashboard';
import Configuracoes from './pages/Configurações/Configuracoes';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/formulario' element={<Formulario />} />
        <Route exact path='login' element={<Login />} />
        <Route exact path='/cadastro' element={<Cadastro />} />
        <Route exact path='dashboard' element={<Dashboard />} />
        <Route exact path='/configuracoes' element={<Configuracoes />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
