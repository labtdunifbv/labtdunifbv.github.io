import React from "react";
import { useNavigate } from "react-router";
import './styles.css';

function Concepts() {
    const navigate = useNavigate();

    const navigateHome = () => {  
        navigate('/');
    }
    return(
        <div className="modal">
            <h1>Conceitos</h1>
            <div className="btn-modal" onClick={()=>navigateHome()}>
                <p className="btn-modal-text">Ir para home</p>
            </div>        
        </div>
    );
}

export default Concepts;