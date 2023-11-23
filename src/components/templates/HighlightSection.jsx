import React from 'react';
import '../atoms/buttons/ButtonSignUp'
import './HighlightSection.css';
import ButtonSignUp from '../atoms/buttons/ButtonSignUp';

export default function HighlightSection() {
    return (
        <div className='main-section'>
            <div className='title'>
                <h1 className='title-text'>
                    <strong>A força por trás da sua fazenda <spam className='destaque'>eficiente</spam></strong>
                </h1>
            </div>
            <h4 className='sub-title'>
                Essa ferramenta digital oferece inúmeras vantagens que ajudam a impulsionar a produtividade e a gestão da maquinaria agrícola de forma significativa.
            </h4>
            <div className='button-signup'>
                <ButtonSignUp />
            </div>
        </div>
    )
}