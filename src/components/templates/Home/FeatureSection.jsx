import React from 'react';
import './FeatureSection.css';

export default function FeatureSection() {
    return (
        <div className='features'>
            <h1 className='title-features'>Descubra a Revolução Agropecuária com Oficina Agro!</h1>
            <p>Na emocionante jornada da agricultura moderna, a eficiência é a chave para o sucesso. Se você é um fazendeiro apaixonado ou gerencia uma grande propriedade rural, sabe que cada minuto conta e que a manutenção de seus tratores e máquinas agrícolas é vital para manter a produtividade no auge.</p>
            <p>É por isso que apresentamos o Aplicativo de Garagem de Fazenda, sua ferramenta essencial para revolucionar a maneira como você gerencia sua frota de tratores e equipamentos agrícolas. Veja por que nossa solução é um investimento inteligente para a eficiência de seus processos agrícolas:</p>
            <ul className='list-features'>
                <li>
                    <span role='img' aria-labelledby='emoji-description'>🛠</span> Manutenção Preditiva de Primeira Classe;
                </li>
                <li>
                    <span role='img' aria-labelledby='emoji-description'>📅</span> Agendamento Simplificado;
                </li>
                <li>
                    <span role='img' aria-labelledby='emoji-description'>⏲</span> Registro de Histórico Detalhado;
                </li>
                <li>
                    <span role='img' aria-labelledby='emoji-description'>🗺</span> Gerenciamento Centralizado;
                </li>
                <li>
                    <span role='img' aria-labelledby='emoji-description'>📈</span> Aumento da Produtividade;
                </li>
                <li>
                    <span role='img' aria-labelledby='emoji-description'>💵</span> Economia de Dinheiro e Tempo.
                </li>
            </ul>
            <p>O Aplicativo Oficina Agro é mais do que uma ferramenta; é um parceiro confiável que apoia seu sucesso na agricultura. Com nossa solução, você está preparado para enfrentar os desafios do setor agrícola moderno, otimizando processos, aumentando a eficiência e colhendo os frutos do seu trabalho com confiança.</p>
            <p>Faça parte da revolução agropecuária e descubra como nosso aplicativo pode transformar sua fazenda em um oásis de eficiência e prosperidade. Experimente agora e descubra o poder da gestão inteligente de tratores e máquinas agrícolas!</p>
        </div>
    )
}