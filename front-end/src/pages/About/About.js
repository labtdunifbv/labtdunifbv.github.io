import React, { } from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';

function About() {
    const navigate = useNavigate();
    const navigateHome = () => {  
        navigate('/');
    }
    const navigateDireito = () => {  
        navigate('/direito');
    }
    const navigateDesign = () => {  
        navigate('/design');
    }
    const navigateTransformacao = () => {  
        navigate('/transformacao');
    }
    return(
        <div className="container-about">  
            <br></br>
            <br></br>
            <h1>SOBRE</h1>
            <br></br>
            <br></br>
            <h3>A Cartilha Digital tem como objetivo a criação de uma cartilha sobre a Lei Geral de Proteção de Dados.</h3>
            <br></br>
            <h3>É um projeto multidisciplinar feito pelos alunos da UniFBV Wyden dos Núcleos: <u> <div className="btn-di" onClick={()=>navigateDireito()}>
                <p className="btn-di-text">Jurídico</p>
            </div></u> , <u><div className="btn-de" onClick={()=>navigateDesign()}>
                <p className="btn-de-text">Design</p>
            </div></u> e <u><div className="btn-t" onClick={()=>navigateTransformacao()}>
                <p className="btn-t-text">Transformação Digital</p>
            </div></u></h3>
            <br></br>
            <br></br>
            <br></br>
            <div className="btn-about" onClick={()=>navigateHome()}>
                <p className="btn-about-text">Voltar para o Menu Principal</p>
            </div>
        </div>
    );
}

export default About;