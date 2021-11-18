import React from "react";
import { useNavigate } from "react-router";
import './styles.css';

function Footer({verification}) {
    const navigate = useNavigate();
    const navigateHome = () => {  
        navigate('/');
    }
    const navigateConcepts = () => {  
        navigate('/conceitos');
    }
    const navigateAbout = () => {  
        navigate('/sobre');
    }
    const navigateRights = () => {  
        navigate('/direitos');
    }
    const navigateUtilities = () => {  
        navigate('/utilidades');
    }
    console.log(verification)

    return(
        <div className="container-footer">
            <div className="btn-footer" onClick={()=>navigateHome()}>
                <p className="btn-footer-text">Home</p>
            </div> 

            {verification === 'Conceitos'? 
                null
            :
                <div className="btn-footer" onClick={()=>navigateConcepts()}>
                    <p className="btn-footer-text">Conceitos</p>
                </div> 
            }
            {verification === 'Sobre'? 
                null
            :
                <div className="btn-footer" onClick={()=>navigateAbout()}>
                    <p className="btn-footer-text">Sobre</p>
                </div> 
            }
            {verification === 'Direitos'? 
                null
            :
                <div className="btn-footer" onClick={()=>navigateRights()}>
                    <p className="btn-footer-text">Direitos</p>
                </div> 
            }
            {verification === 'Utilidades'? 
                null
            :
                <div className="btn-footer" onClick={()=>navigateUtilities()}>
                    <p className="btn-footer-text">Utilidades</p>
                </div> 
            }
        </div>
    );
}

export default Footer;