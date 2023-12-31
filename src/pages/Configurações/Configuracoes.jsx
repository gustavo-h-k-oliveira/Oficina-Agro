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
                            <div class="form-check-form-switch">
                                <label class="switch">
                                    <input type="checkbox" id='flexSwitchCheckDefault1'/>
                                    <span class="slider round"></span>
                                </label>
                                <label class="form-check-label" for="flexSwitchCheckDefault1">Notificações (novas tarefas, conclusão de tarefas, mensagens, etc).</label>
                            </div>
                        </div>
                        <div className='setting'>
                            <div class="form-check-form-switch">
                                <label class="switch">
                                    <input type="checkbox" id='flexSwitchCheckDefault2'/>
                                    <span class="slider round"></span>
                                </label>
                                <label class="form-check-label" for="flexSwitchCheckDefault2">Alertas de tarefas pendentes</label>
                            </div>
                        </div>
                        <div className='setting'>
                            <div class="form-check-form-switch">
                                <label class="switch">
                                    <input type="checkbox" id='flexSwitchCheckDefault3' checked disabled />
                                    <span class="slider round"></span>
                                </label>
                                <label class="form-check-label" for="flexSwitchCheckDefault3">Modo Escuro</label>
                            </div>
                        </div>
                        <div className='setting'>
                            <div class="form-check-form-switch">
                                <label class="switch">
                                    <input type="checkbox" id='flexSwitchCheckDefault4' />
                                    <span class="slider round"></span>
                                </label>
                                <label class="form-check-label" for="flexSwitchCheckDefault4">Exibir status de presença</label>
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