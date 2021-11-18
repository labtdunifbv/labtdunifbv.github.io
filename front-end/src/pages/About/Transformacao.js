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
            <h3>TI 1</h3>
            <br></br>
            <h3>TI 2</h3>
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