import React from 'react';
import './Invite.css';
import image from '/workspace/Oficina-Agro/src/assets/images/persona.png';

export default function Cadastro() {
    return (
        <>
            <div className='signup-invite'>
                <div className='text-invite'>
                    <div className='invite-title'>
                        <h1 className='title'>
                            Faça parte de nossa equipe e alcance o potencial que sua fazenda merece
                        </h1>
                    </div>
                    <div className='invite-sub-title'>
                        <h3 className='sub-title'>
                            Realize o cadastro para ativar a sua conta e ter acesso à benefícios incríveis!
                        </h3>
                    </div>
                </div>
                <div className='testimony'>
                    <div className='text-testimony'>
                        <h3 className='text'>
                            "A solução oferecida pela Oficina Agro permitiu que a minha fazenda agilizasse processos rotineiros, e consequentemente, aumentando a minha produção na lavoura."
                        </h3>
                    </div>
                    <div className='persona'>
                        <img src={image} alt='Foto da testemunha' />
                        <div className='persona-name'>
                            <h3>
                                Regina Duarte
                            </h3>
                        </div>
                        <p className='persona-about'>
                            Administradora e usuária do Oficina Agro há três anos
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}