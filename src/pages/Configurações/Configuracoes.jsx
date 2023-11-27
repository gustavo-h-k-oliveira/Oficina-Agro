import React from 'react';
import './Configuracoes.css';
import HeaderLogado from '../../components/organisms/Header/HeaderLogado.jsx';
import Footer from '../../components/organisms/Footer/Footer.jsx'
import image from '/workspace/Oficina-Agro/src/assets/images/user.png';
import ButtonAlterProfile from '../../components/atoms/buttons/ButtonAlterProfile.jsx';
import ButtonSendMessage from '../../components/atoms/buttons/ButtonSendMessage.jsx';
import ButtonSaveSettings from '../../components/atoms/buttons/ButtonSaveSettings.jsx';

const Configuracoes = () => {
    return (
        <>
            <HeaderLogado />
            <div className='bckg'>
                <div className='settings-content'>
                    <div className='profile-info'>
                        <img src={image} className='user-img' alt='Foto do usuário' />
                        <div className='profile-details'>
                            <h3 className='username'>
                                Diogo Yusuke
                            </h3>
                            <h3 className='occupation'>
                                Administrador da fazenda <span className='fazenda'>AgroVerde</span>
                            </h3>
                            <p className="status">Online</p>
                            <div className='btn-profile'>
                                <ButtonAlterProfile />
                                <ButtonSendMessage />
                            </div>
                        </div>
                    </div>
                    <hr className='h-line' />
                    <div className='btn-settings'>
                        <h2 className='title-stgs'>
                            Configurações
                        </h2>
                        <br />
                        <div className='setting'>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label class="form-check-label" for="flexSwitchCheckDefault">Notificações (novas tarefas, conclusão de tarefas, mensagens, etc).</label>
                            </div>
                        </div>
                        <div className='setting'>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label class="form-check-label" for="flexSwitchCheckDefault">Alertas de tarefas pendentes</label>
                            </div>
                        </div>
                        <div className='setting'>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked disabled />
                                <label class="form-check-label" for="flexSwitchCheckDefault">Modo Escuro</label>
                            </div>
                        </div>
                        <div className='setting'>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label class="form-check-label" for="flexSwitchCheckDefault">Exibir status de presença</label>
                            </div>
                        </div>
                        <div className='pos-button'>
                            <ButtonSaveSettings />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Configuracoes;