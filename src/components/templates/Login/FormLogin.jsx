import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './FormLogin.css';
import image from '/workspace/Oficina-Agro/src/assets/images/oficina-logo.png';
import ButtonSignIn from '../../atoms/buttons/ButtonSignIn';

export default function FormLogin() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleNomeChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    return (
        <div className="login-container">
            <div className='logo'>
                <img src={image} alt='Logo do site' />
            </div>
            <h2 className='welcome'>Bem-vindo de volta</h2>
            <input type='email' className='login-input' id='InputEmail' placeholder='Email' value={email} onChange={handleNomeChange} />
            <input type='password' className='login-input' id='InputSenha' placeholder='Senha' value={senha} onChange={handleSenhaChange} />
            <div className='perm-login'>
                <input type='checkbox' aria-label='checkbox-logged' />
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Permanecer conectado
                </label>
            </div>
            <ButtonSignIn />
            <p>Você não tem uma conta?</p>
            <div className='link-signup'>
                <Link to="/signin">
                    Cadastre-se
                </Link>
            </div>
        </div>
    )
}