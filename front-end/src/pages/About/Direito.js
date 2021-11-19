import React, { } from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Direito() {
    const navigate = useNavigate();
    const navigateAbout = () => {  
        navigate('/sobre');
    }
    return(
        <div className="container-about">  
            <br></br>
            <br></br>
            <h1>NÚCLEO JURÍDICO</h1>
            <br></br>
            <br></br>
            <h3>
            Prof. Alessandra Prôa Greenhalgh de Oliveira
            </h3>
            <h3>
            Maria Heloiza Chaves
            </h3>
            <h3>
            Evelyn Vitória Paz de Albuquerque
            </h3>
            <h3>
            Cristina Helena Barreto de Alcantara
            </h3>
            <h3>
            Elves José Ximenes Bandeira de Almeida
            </h3>
            <h3>
            Ana Marcely Vidal de Lima 
            </h3>
            <h3>
            Rayan Jesus dos Santos 
            </h3>
            <h3>
            Camila de Andrade Silva
            </h3>
            <h3>
            Alycia Gabrielle de Lima
            </h3>
            <h3>
            Camila Alves Sales Caminha Silveira
            </h3>
            <h3>
            Jessyca Vitoria Maria Francisco Silva
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

export default Direito;