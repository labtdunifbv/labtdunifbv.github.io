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
            <h1>Home</h1>
            <div className="btn" onClick={()=>navigateConcepts()}>
                <p className="btn-text">Ir para conceitos</p>
            </div>
            <div className="btn" onClick={()=>navigateRights()}>
                <p className="btn-text">Ir para direitos</p>
            </div>
            <div className="btn" onClick={()=>navigateAbout()}>
                <p className="btn-text">Ir para sobre</p>
            </div>
            <div className="btn" onClick={()=>navigateUtilities()}>
                <p className="btn-text">Ir para utilidades</p>
            </div>
        </div>
    )
}

export default Home;