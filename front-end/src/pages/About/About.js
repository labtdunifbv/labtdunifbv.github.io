import React, { } from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';

function About() {
    const navigate = useNavigate();
    const navigateHome = () => {  
        navigate('/');
    }
    return(
        <div className="container-about">  
            <h1>Sobre</h1>
            <div className="btn-about" onClick={()=>navigateHome()}>
                <p className="btn-about-text">Ir para home</p>
            </div>
        </div>
    );
}

export default About;