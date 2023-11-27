import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import ButtonSignUp from '../../atoms/buttons/ButtonSignUp';


export default function SignUp() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nomeFazenda, setNomeFazenda] = useState('');

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    const handleNomeFazendaChange = (event) => {
        setNomeFazenda(event.target.value);
    };

    return (
        <div className='signup-form'>
            <h2 className='signup-title'>
                Vamos começar!
            </h2>
            <h3 className='signup-sub-title'>
                Insira as suas informações para criar a sua conta
            </h3>
            <div className='input'>
                <input type='text' className='signup-input' id='InputNome' placeholder='Nome Completo' value={nome} onChange={handleNomeChange} />
                <input type='email' className='signup-input' id='InputEmail' placeholder='Email' value={email} onChange={handleEmailChange} />
                <input type='password' className='signup-input' id='InputSenha' placeholder='Senha' value={senha} onChange={handleSenhaChange} />
                <input type='text' className='signup-input' id='InputNomeFazenda' placeholder='Nome da fazenda' value={nomeFazenda} onChange={handleNomeFazendaChange} />
            </div>
            <div className='btn-height'>
                <ButtonSignUp />
            </div>
            <p>
                Você já tem uma conta?
            </p>
            <div className='link-signin'>
                <Link to='/login'>
                    Login
                </Link>
            </div>
        </div>
    )
}