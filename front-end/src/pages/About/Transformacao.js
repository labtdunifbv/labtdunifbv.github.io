import React, { } from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Transformacao() {
    const navigate = useNavigate();
    const navigateAbout = () => {  
        navigate('/sobre');
    }
    return(
        <div className="container-about">  
            <br></br>
            <br></br>
            <h1>NÚCLEO DE TRANSFORMAÇÃO DIGITAL</h1>
            <br></br>
            <br></br>
            <h2>LAB TD - LABORATÓRIO TRANSFORMAÇÃO DIGITAL</h2>
            <br></br>
            <h3>
            Prof. Andrea Raymundo Balle
            </h3>
            <h3>
            Kaio Henrique Pacheco Dos Santos Oliveira
            </h3>
            <h3>
            Agostinho Henrique Teixeira de Santana Neto
            </h3>
            <h3>
            Misael Sebastião do Nascimento
            </h3>
            <h3>
            Thiago Henrique Melo da Silva
            </h3>
            <h3>
            José Carlos de Medeiros Filho
            </h3>
            <h3>
            João Vitor de Souza Vieira
            </h3>
            <h3>
            Priscila Maria Ferreira de Araújo
            </h3>
            <h3>
            Pedro Henrique Van-Lume Viana
            </h3>
            <br></br>
            <br></br>
            <br></br>
            <div className="btn-about" onClick={()=>navigateAbout()}>
                <p className="btn-about-text">Voltar</p>
            </div>
        </div>
    );
}

export default Transformacao;