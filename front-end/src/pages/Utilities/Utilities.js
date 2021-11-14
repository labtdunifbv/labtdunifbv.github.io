import React, { } from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Utilities() {
    const navigate = useNavigate();
    const navigateHome = () => {  
        navigate('/');
    }
    return(
        <div className="container-utilities">  
            <h1>Utilidades</h1>
            <div className="btn-utilities" onClick={()=>navigateHome()}>
                <p className="btn-utilities-text">Ir para home</p>
            </div>
        </div>
    );
}

export default Utilities;