import React, { } from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Home() {
    const navigate = useNavigate();
    const navigateConcepts = () => {  
        navigate('/concepts');
    }

    return (
        <div className="container">  
            <h1>Home</h1>
            <div className="btn" onClick={()=>navigateConcepts()}>
                <p className="btn-text">Ir para conceitos</p>
            </div>
        </div>
    )
}

export default Home;