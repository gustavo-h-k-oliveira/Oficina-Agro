import React from 'react';
import './Cadastro.css';
import Invite from '../../components/templates/Cadastro/Invite';
import SignUp from '../../components/templates/Cadastro/SignUp';

const Cadastro = () => {
    return (
        <>
            <div className='background'>
                <div className='content-signup'>
                    {/* <div className='ellipse-left'>
                        <svg width="50vw" height="40vh" viewBox="0 0 823 570">
                            <ellipse cx="100" cy="100" rx="100" ry="100" fill="bisque" />
                        </svg>  
                    </div>
                    <div className='ellipse-right'>
                        <svg width="200" height="100">
                            <ellipse cx="200" cy="100" rx="100" ry="100" fill="blue" />
                        </svg>  
                    </div> */}
                    <Invite />
                    <SignUp />
                </div>
            </div>
        </>
    )
};

export default Cadastro;