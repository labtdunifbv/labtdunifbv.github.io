import React, { } from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Home() {
    const navigate = useNavigate();
    const navigateConcepts = () => {  
        navigate('/conceitos');
    }
    const navigateRights = () => {  
        navigate('/direitos');
    }
    const navigateAbout = () => {  
        navigate('/sobre');
    }
    const navigateUtilities = () => {  
        navigate('/utilidades');
    }

    return (
        <div className="container">  
            <h1>MENU PRINCIPAL</h1>
            <br></br>

            <div className='btn-c' onClick={()=>navigateConcepts()}>
                <p className="btn-text">Conceitos</p>
            </div>
            <div className='btn-d' onClick={()=>navigateRights()}>
                <p className="btn-text">Seus Direitos</p>
            </div>
            
            <div className='btn-s' onClick={()=>navigateAbout()}>
                <p className="btn-text">Sobre</p>
            </div>
            <div className='btn-u' onClick={()=>navigateUtilities()}>
                <p className="btn-text">Utilidades</p>
            </div>
        </div>
    )
}

export default Home;