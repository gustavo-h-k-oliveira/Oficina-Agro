import React from 'react';
import './Tasks.css';

export default function Tasks() {
    return (
        <>
            <div className='tasks-columns'>
                <div className='right-column'>
                    <div className='list'>
                        <div className='info-list'>
                            <h5 className='title-list'>Lista de tarefas</h5>
                            <button className='btn-detail' type='button' aria-label='ver-detalhes' onClick={() => alert('Acessando a página de tarefas pendentes.')}><span>Ver detalhes</span></button>
                        </div>
                        <div className='items-list'>
                            <div className='item'>
                                <h5>
                                    Comprar novos insumos
                                </h5>
                            </div>
                            <div className='item'>
                                <h5>
                                    Realizar pedido de novas peças
                                </h5>
                            </div>
                            <div className='item'>
                                <h5>
                                    Realizar pedido de novos equipamentos
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className='calendar'>
                        <div style={{width: 392, height: 384, padding: 4, background: '#FFCC90', borderRadius: 12, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', paddingLeft: 32, paddingRight: 32, paddingTop: 16, paddingBottom: 16, background: '#FFDDB5', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 6, height: 12, left: 9, top: 6, position: 'absolute', border: '2px black solid'}}></div>
                                </div>
                                <div style={{flex: '1 1 0', textAlign: 'center', color: '#828282', fontSize: 20, fontFamily: 'Lato', fontWeight: '600', wordWrap: 'break-word'}}>SETEMBRO 2023</div>
                                <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 6, height: 12, left: 9, top: 6, position: 'absolute', border: '2px black solid'}}></div>
                                </div>
                            </div>
                            <div style={{width: 355, height: 0, border: '1px #BDBDBD solid'}}></div>
                            <div style={{alignSelf: 'stretch', height: 286, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                                <div style={{alignSelf: 'stretch', paddingLeft: 32, paddingRight: 32, paddingTop: 8, paddingBottom: 8, justifyContent: 'center', alignItems: 'center', gap: 11, display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', height: 16, paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                                    <div style={{color: 'black', fontSize: 12, fontFamily: 'Lato', fontWeight: '500', textTransform: 'uppercase', lineHeight: 12, letterSpacing: 0.36, wordWrap: 'break-word'}}>DOM</div>
                                </div>
                                <div style={{flex: '1 1 0', height: 16, paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                                    <div style={{color: 'black', fontSize: 12, fontFamily: 'Lato', fontWeight: '500', textTransform: 'uppercase', lineHeight: 12, letterSpacing: 0.36, wordWrap: 'break-word'}}>SEG</div>
                                </div>
                                <div style={{flex: '1 1 0', height: 16, paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                                    <div style={{color: 'black', fontSize: 12, fontFamily: 'Lato', fontWeight: '500', textTransform: 'uppercase', lineHeight: 12, letterSpacing: 0.36, wordWrap: 'break-word'}}>TER</div>
                                </div>
                                <div style={{flex: '1 1 0', height: 16, paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                                    <div style={{color: 'black', fontSize: 12, fontFamily: 'Lato', fontWeight: '500', textTransform: 'uppercase', lineHeight: 12, letterSpacing: 0.36, wordWrap: 'break-word'}}>QUA</div>
                                </div>
                                <div style={{flex: '1 1 0', height: 16, paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                                    <div style={{color: 'black', fontSize: 12, fontFamily: 'Lato', fontWeight: '500', textTransform: 'uppercase', lineHeight: 12, letterSpacing: 0.36, wordWrap: 'break-word'}}>QUI</div>
                                </div>
                                <div style={{flex: '1 1 0', height: 16, paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                                    <div style={{color: 'black', fontSize: 12, fontFamily: 'Lato', fontWeight: '500', textTransform: 'uppercase', lineHeight: 12, letterSpacing: 0.36, wordWrap: 'break-word'}}>SEX</div>
                                </div>
                                <div style={{flex: '1 1 0', height: 16, paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                                    <div style={{color: 'black', fontSize: 12, fontFamily: 'Lato', fontWeight: '500', textTransform: 'uppercase', lineHeight: 12, letterSpacing: 0.36, wordWrap: 'break-word'}}>SÁB</div>
                                </div>
                                </div>
                                <div style={{alignSelf: 'stretch', height: 250, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                <div style={{alignSelf: 'stretch', paddingLeft: 32, paddingRight: 32, paddingTop: 4, paddingBottom: 4, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0.50)', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>27</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0.50)', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>28</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0.60)', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>29</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0.50)', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>30</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0.50)', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>31</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>1</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>2</div>
                                    </div>
                                </div>
                                <div style={{alignSelf: 'stretch', paddingLeft: 32, paddingRight: 32, paddingTop: 4, paddingBottom: 4, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>3</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>4</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>5</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>6</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>7</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>8</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>9</div>
                                    </div>
                                </div>
                                <div style={{alignSelf: 'stretch', paddingLeft: 32, paddingRight: 32, paddingTop: 4, paddingBottom: 4, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>10</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>11</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>12</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>13</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>14</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>15</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>16</div>
                                    </div>
                                </div>
                                <div style={{alignSelf: 'stretch', paddingLeft: 32, paddingRight: 32, paddingTop: 4, paddingBottom: 4, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>17</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>18</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>19</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>20</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>21</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>22</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>23</div>
                                    </div>
                                </div>
                                <div style={{alignSelf: 'stretch', paddingLeft: 32, paddingRight: 32, paddingTop: 4, paddingBottom: 4, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>24</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>25</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>26</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>27</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>28</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>29</div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 42, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>30</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='left-column'>
                    <div className='list'>
                        <div className='info-list'>
                            <h5 className='title-list'>Tarefas completas</h5>
                            <button className='btn-detail' type='button' aria-label='ver-detalhes' onClick={() => alert('Acessando a página de tarefas completas.')}><span>Ver detalhes</span></button>
                        </div>
                        <div className='items-list'>
                            <div className='item'>
                                <h5>
                                    Realizar inventário do estoque
                                </h5>
                            </div>
                            <div className='item'>
                                <h5>
                                    Manutenção da plantadeira Meridia 200
                                </h5>
                            </div>
                            <div className='item'>
                                <h5>
                                    Limpeza dos equipamentos do setor 3
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='info-list'>
                            <h5 className='title-list'>Prioridades</h5>
                            <button className='btn-detail' type='button' aria-label='ver-detalhes' onClick={() => alert('Acessando a página de prioridades.')}><span>Ver detalhes</span></button>
                        </div>
                        <div className='items-list'>
                            <div className='item'>
                                <h5>
                                    Organizar peças do armázem número 1
                                </h5>
                            </div>
                            <div className='item'>
                                <h5>
                                    Verificar a condição dos novos equipamentos
                                </h5>
                            </div>
                            <div className='item'>
                                <h5>
                                    Contatar novos eletricistas mecânicos
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};