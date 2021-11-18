import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Footer from "../../Components/Footer/Footer";

function Utilities() {
    const [title, setTitle] = useState('Utilidades');
    const navigate = useNavigate();
    const navigateHome = () => {  
        navigate('/');
    }
    return(
        <div className="container-utilities">  
            <h1>{title}</h1>
            <br></br>
            <h3>Link: <a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm">Lei LGPD Completa</a></h3>
            <br></br>
            <div className="btn-utilities" onClick={()=>navigateHome()}>
                <p className="btn-utilities-text">Voltar para o Menu Principal</p>
            </div>
            <Footer verification={title}/>
        </div>
    );
}

export default Utilities;