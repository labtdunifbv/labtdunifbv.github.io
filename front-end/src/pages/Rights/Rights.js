import React, { } from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Rights() {
    const navigate = useNavigate();
    const navigateHome = () => {  
        navigate('/');
    }
    return(
        <div className="container-rights">  
            <h1>Direitos</h1>
            <div className="btn-rights" onClick={()=>navigateHome()}>
                <p className="btn-rights-text">Ir para home</p>
            </div>
        </div>
    );
}

export default Rights;