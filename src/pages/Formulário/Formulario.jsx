import React from 'react';
import './Formulario.css';
import HeaderLogado from '../../components/organisms/Header/HeaderLogado';
import FormCadastro from '../../components/templates/Formulário/FormCadastro';

const FormPage = () => {
    return (
        <>
            <HeaderLogado />
            <div className='content'>
                <FormCadastro />
            </div>
        </>
    );
};

export default FormPage;