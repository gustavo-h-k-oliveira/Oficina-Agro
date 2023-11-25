import React, { useState } from 'react';
import ButtonFormProduto from '../../atoms/buttons/ButtonFormProduto';
import ButtonFormSection from '../../atoms/buttons/ButtonFormSection';
import './FormCadastro.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Formulário() {

    const [showForm1, setShowForm1] = useState(true);

    const switchForm = () => {
        setShowForm1(!showForm1);
    };

    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [modelo, setModelo] = useState('');
    const [numero_serie, setNumeroSerie] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [descricao, setDescricao] = useState('');
    const [setor, setSetor] = useState('');
    const [ultima_data, setUltData] = useState('');
    const [proxima_data, setProxData] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [complemento, setComplemento] = useState('');


    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleTipoChange = (event) => {
        setTipo(event.target.value);
    }

    const handleModeloChange = (event) => {
        setModelo(event.target.value);
    }

    const handleNumeroSerieChange = (event) => {
        setNumeroSerie(event.target.value);
    }

    const handleQuantidadeChange = (event) => {
        setQuantidade(event.target.value);
    }

    const handleDescricaoChange = (event) => {
        setDescricao(event.target.value);
    }

    const handleSetorChange = (event) => {
        setSetor(event.target.value);
    }

    const handleUltDataChange = (event) => {
        setUltData(event.target.value);
    }

    const handleProxDataChange = (event) => {
        setProxData(event.target.value);
    }

    const handleResponsavelChange = (event) => {
        setResponsavel(event.target.value);
    }

    const handleComplementoChange = (event) => {
        setComplemento(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Nome:', nome);
      console.log('Tipo:', tipo);
      console.log('Modelo', modelo);
      console.log('Número de série', numero_serie);
      console.log('Quantidade', quantidade);
      console.log('Descrição', descricao);
      console.log('Setor', setor);
      console.log('Última data de manutenção', ultima_data);
      console.log('Próxima data de manutenção', proxima_data);
      console.log('Responsável', responsavel);
      console.log('Complemento', complemento);
    };

    return (
        <>
            <div className='buttons-form'>
                <ButtonFormProduto />
                <ButtonFormSection />
            </div>

            {showForm1 ? (
                <form id='form1' onSubmit={handleSubmit}>
                    <div className='form'>
                        <div className='form-group1'>
                            <div className='input-subgroup1'>
                                <div className='input1'>
                                    <label htmlFor='FormControlInput1' className='form-label'>
                                        Nome do produto
                                    </label>
                                    <input type="text" class="form-control" id='FormControlInput1' placeholder="Nome" value={nome} onChange={handleNomeChange} aria-label="Nome-produto" aria-describedby="basic-addon1" />
                                </div>
                                <div className='input2'>
                                    <label htmlFor='FormControlInput2' className='form-label'>
                                        Tipo de produto
                                    </label>
                                    <select class="custom-select" id="inputGroupSelect01" value={tipo} onChange={handleTipoChange}>
                                        <option selected>Selecione o produto...</option>
                                        <option value="trator">Trator</option>
                                        <option value="caminhao">Caminhão</option>
                                        <option value="suplemento">Suplemento</option>
                                        <option value="escavadeira">Escavadeira</option>
                                        <option value="outros">Outros</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input3">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile01" />
                                    <label class="custom-file-label" for="inputGroupFile01">Insira uma imagem</label>
                                    <p>Clique aqui ou arraste uma imagem para este quadrado</p>
                                </div>
                            </div>
                        </div>
                        <div className='input4'>
                            <label htmlFor='FormControlInput3' className='form-label'>
                                Modelo do produto
                            </label>
                            <input type="text" class="form-control" id='FormControlInput3' placeholder="Modelo" value={modelo} onChange={handleModeloChange} aria-label="Modelo-produto" aria-describedby="basic-addon1" />
                        </div>
                        <div className='form-group2'>
                            <div className='input5'>
                                <label htmlFor='FormControlInput4' className='form-label'>
                                    Número de série
                                </label>
                                <input type="text" class="form-control" id='FormControlInput4' placeholder="Série" value={numero_serie} onChange={handleNumeroSerieChange} aria-label="Numero-serie-produto" aria-describedby="basic-addon1" />
                            </div>
                            <div className='input6'>
                                <label htmlFor='FormControlInput5' className='form-label'>
                                    Quantidade
                                </label>
                                <input type="number" class="form-control" id='FormControlInput5' placeholder="Quantidade" value={quantidade} onChange={handleQuantidadeChange} aria-label="Quantidade-produto" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='input7'>
                            <label htmlFor='FormControlInput6' className='form-label'>
                                Descrição do produto
                            </label>
                            <input type="text" class="form-control" id='FormControlInput6' placeholder="Descrição" value={descricao} onChange={handleDescricaoChange} aria-label="Descricao-produto" aria-describedby="basic-addon1" />
                        </div>
                        <div className='button-next'>
                            <button type='submit' className='btn-primary' form='form-product' onClick={switchForm}>
                                <span className='text-button-next'>Próximo</span>
                            </button>
                        </div>
                    </div>
                </form>
            ) : (
                <form id='form2'>
                    <div className='form'>
                        <div className='input7'>
                            <label htmlFor='FormControlInput7' className='form-label'>
                                Setor
                            </label>
                            <input type="text" class="form-control" id='FormControlInput7' placeholder="Setor" value={setor} onChange={handleSetorChange} aria-label="Nome-setor" aria-describedby="basic-addon1" />
                        </div>
                        <div className='form-group3'>
                            <div className='input8'>
                                <label htmlFor='FormControlInput8' className='form-label'>
                                    Data da última manutenção
                                </label>
                                <input type='date' class="form-control" id='FormControlInput8' placeholder="Última data" value={ultima_data} onChange={handleUltDataChange} aria-label="ultima-data-manutencao" aria-describedby="basic-addon1" />
                            </div>
                            <div className='input9'>
                                <label htmlFor='FormControlInput9' className='form-label'>
                                    Data da próxima manutenção
                                </label>
                                <input type='date' class="form-control" id='FormControlInput9' placeholder="Próxima data" value={proxima_data} onChange={handleProxDataChange} aria-label="proxima-data-manutencao" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='input10'>
                            <label htmlFor='FormControlInput10' className='form-label'>
                                Nome do responsável
                            </label>
                            <input type='text' class="form-control" id='FormControlInput10' placeholder="Responsável" value={responsavel} onChange={handleResponsavelChange} aria-label="responsavel" aria-describedby="basic-addon1" />
                        </div>
                        <div className='input11'>
                            <label htmlFor='FormControlInput11' className='form-label'>
                                Descrição/complemento
                            </label>
                            <input type='text' class="form-control" id='FormControlInput11' placeholder="Complemento" value={complemento} onChange={handleComplementoChange} aria-label="complemento-setor" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </form>
            )}
        </>
    )
};