import React from "react";
import { useNavigate } from "react-router";
import './styles.css';

function Modal({ onClose=()=>{}}) {
    const navigate = useNavigate();

    function home() {  
        navigate('/');
    }
    return(
        <div className="modal">
            <h1>Modal</h1>
            <div className="btn-modal" onClick={()=>home()}>
                <p className="btn-modal-text">Ir para home</p>
            </div>        
        </div>
    );
}

export default Modal;