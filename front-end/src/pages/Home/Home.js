import React, { useState, useRef } from "react";
import './styles.css';
import { ReactComponent as Img2 } from '../Home/left.png';
import { ReactComponent as Img1 } from '../Home/right.png'; 
import img1 from'../Home/right.png';
import img2 from'../Home/left.png';


function Home() {
    const [concepts, setConcepts] = useState([{
            title: "I - Dado pessoal",
            text: "Qualquer informação que identifique você como pessoa física, como por exemplo: nome completo, número do RG, número do CPF, etc."
        },
        {
            title: "II - Dado pessoal sensível",
            text: "Qualquer informação que identifique você como pessoa física e que possa ser utilizada para fins discriminatórios, tais como: sua religião, sua opção sexual, sua raça, sua opinião política, seus dados genéticos ou biométricos, sua filiação à sindicato ou a organização de caráter religioso, filosófico ou político."
        },
        {
            title: "III - Dado anonimizado",
            text: "É um dado pessoal ou um dado pessoal sensível que deixa de ser diretamente relacionado a uma pessoa, sendo assim, os titulares dos dados não podem ser identificados."
        },
        {
            title: "IV - Banco de dados",
            text: "Conjunto de dados pessoais de vários titulares guardados por uma pessoa ou por uma empresa por meio digital ou físico."
        },
        {
            title: "V - Titular",
            text: "É você, o dono dos seus dados pessoais ou de dados pessoais sensíveis e, portanto, tem o direito de consentir, ou não, com a realização de operações com estes dados."
        },
        {
            title: "VI - Controlador",
            text: "É a pessoa ou empresa responsável pelas decisões relacionadas as operações  realizadas com os seus dados pessoais, sendo ele quem decide quais dados serão tratados, bem como a forma de tratamento e sua finalidade."
        },
        {
            title: "VII – OPERADOR",
            text: "É uma pessoa física ou jurídica de direito público ou privado, contratada pelo controlador, que tem como função de operar seus dados pessoais de acordo com a LGPD, mas que deve obedecer os comandos do controlador. "
        },
        {
            title: "VIII - ENCARREGADO",
            text: "Também chamado de DPO (Data Protection Officer) será a pessoa indicada pelos agentes, para operar seus os dados pessoais. Tem como principal função a intermediação entre o controlador que será a própria empresa, com os titulares dos dados pessoais (funcionários, fornecedores e clientes) e o governo (por meio da ANPD). "
        },
        {
            title: "IX - Agentes de tratamento",
            text: "São as pessoas que tem a função de realizar toda operação dos seus dados pessoais, desde o recebimento até a sua retirada do sistema."
        },
        {
            title: "X - TRATAMENTO",
            text: "Todas as operações realizadas com os seus dados pessoais, tais como COLETA (a solicitação dos seus dados com finalidade específica), PRODUÇÃO (é a criação de novo dados seus), RECEPTAÇÃO (ato de receber os seus dados pessoais), CLASSIFICAÇÃO (organização dos dados conforme algum critério estabelecido pela empresa), UTILIZAÇÃO (o aproveitamento dos seus dados pela empresa, ACESSO (o conhecimento dos seus dados, REPRODUÇÃO (O ato de copiar os seus dados pessoais, TRANSMISSÃO (é a transferência de seus dados para outra pessoas) entre outros."
        },
        {
            title: "XI – ANONIMIZAÇÃO",
            text: "É a operação realizada para tornar os seus dados anônimos de forma a tornar impossível a identificação do titular."
        },
        {
            title: "XII – CONSENTIMENTO",
            text: "É a permissão que você dá para que seus dados pessoais sejam tratados por uma pessoa física ou jurídica, sendo assegurado a você o direito de saber para que fim os seus dados serão usados."
        }
    ]);
    const [rights, setRights] = useState([
        {
            title: "Art. 19",
            text: "Você, como titular, tem direito de requerer a confirmação da existência de algum dos seus dados pessoais na empresa ou nos arquivos de uma pessoa, bem como o acesso a estes dados. A empresa ou pessoa que estiver na posse dos seus dados pessoais terá que atender a sua solicitação imediatamente em formato simples contendo os seus dados mais básicos ou em até 15 dias, contados da data do requerimento, em forma de declaração clara e completa devendo constar como conseguiu os dados ou que não existem dados pessoais seus registrados. Também deve ser informado na declaração quais os critérios e a finalidade utilizadas na operação de seus dados."
        },
        {
            title: "Art. 19, §2º",
            text: "Você, como titular, tem direito de escolher se deseja receber as informações de a confirmação da existência de algum dos seus dados pessoais na empresa ou nos arquivos de uma pessoa, bem como o acesso a estes dados por meio eletrônico (qualquer equipamento usado na comunicação que seja eletrônico, ou seja, whats app, e-mail, telegram, etc),  ou sob a forma impressa (em folha de papel)."
        },
        {
            title: "Art. 19, §3º",
            text: "Você, como titular, tem pleno direito de solicitar uma cópia eletrônica de todos os seus dados pessoais guardados pelo controlador de forma que possam ser usados posteriormente, inclusive em outras operações de tratamentos."
        },
        {
            title: "Art. 21",
            text: "Os seus dados pessoais não poderão ser utilizados por qualquer empresa ou pessoa para prejudicá-lo."
        },
        {
            title: "Art. 22",
            text: "Se os seus dados pessoais forem utilizados de forma indevida, você poderá buscar uma reparação de danos no Judiciário, podendo propor a ação sozinho, ou coletivamente, se outras pessoas estiverem na mesma situação que você."
        },
        {
            title: "Art. 46",
            text: "As pessoas competentes para realizar toda operação com os seus dados pessoais,  tem a obrigação de  adotar todas as medidas de segurança necessárias à proteção dos seus dados pessoais contra acessos não autorizados, situações acidentais que exponham os seus dados, bem como de qualquer forma de operação ilícita."
        }
    ]);

    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    console.log(concepts);
    console.log(rights);
    return (
        <div className="container">
            <div className="header">
            <img src={img1} className="header-img" alt="fireSpot"/>
                <div className="container-header-logo">
                    <p className="header-logo-1">cartilha</p>
                    <p className="header-logo-2">LGPD</p>
                </div>
                <img src={img2} className="header-img" alt="fireSpot"/>
            </div>


            
        </div>
    )
}

export default Home;