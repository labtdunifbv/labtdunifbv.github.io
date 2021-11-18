import React, { } from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Design() {
    const navigate = useNavigate();
    const navigateAbout = () => {  
        navigate('/sobre');
    }
    return(
        <div className="container-about">  
            <br></br>
            <br></br>
            <h1>NÚCLEO DESIGN</h1>
            <br></br>
            <br></br>
            <h2>IDEIA - ESCRITÓRIO EXPERIMENTAL DE DESIGN</h2>
            <br></br>
            <h3>
            Prof. Arthur de Oliveira Filho
            </h3>
            <h3>
            Beatriz Mota
            </h3>
            <h3>
            Julia Belian
            </h3>
            <h3>
            Luana Celine
            </h3>
            <h3>
            Assíria Rocha
            </h3>
            <h3>
            Rayna Cavalcante
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

export default Design;