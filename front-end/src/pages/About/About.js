import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../../Components/Footer/Footer";
import './styles.css';

function About() {
    const [title, setTitle] = useState('Sobre');
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
            <h1 className="title-about">{title}</h1>
            <br></br>
            <br></br>
            <h3>A Cartilha Digital tem como objetivo a criação de um guia sobre a Lei Geral de Proteção de Dados.</h3>
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
            <Footer verification={title}/>
        </div>
    );
}

export default About;