import React, { useState } from "react";
import './styles.css';
import Footer from "../../Components/Footer/Footer";

function Utilities() {
    const [title, setTitle] = useState('Utilidades');

    return(
        <div className="container-utilities">  
            <h1 className="title-utilites">{title}</h1>
            <br></br>
            <h3>Link: <a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm">Lei LGPD Completa</a></h3>
            <br></br>
            <Footer verification={title}/>
        </div>
    );
}

export default Utilities;