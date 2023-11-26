import React from 'react';
import './Login.css';
import FormLogin from '../../components/templates/Login/FormLogin';

const Login = () => {

    return (
        <div className='content'>
            <div className='form'>
                <FormLogin />
            </div>
        </div>
    )
}

export default Login;