import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { RightsData } from '../../Data/RightsData';
import arrowLeft from'../Rights/setaE.PNG';
import arrowRight from'../Rights/setaR.PNG';
import Footer from "../../Components/Footer/Footer";

function Rights() {
    const [rights, setRights] = useState(RightsData);
    const [title, setTitle] = useState('Direitos');
    const navigate = useNavigate();
    const navigateHome = () => {  
        navigate('/');
    }
    const carousel = useRef(null);
    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
    return(
        <div className="container-rights">  
            <h1>{title}</h1>
            <div className="container-carousel-rights">
                <div className="btn-arrow" onClick={handleLeftClick}>
                    <img src={arrowLeft} className="btn-img" alt="left"/>
                </div>
                <div className="carousel" ref={carousel}>
                    {rights.map(right => (
                        <div className="item-rights">
                            <p className="item-title">{right.title}</p>
                            <p className="item-text">{right.text}</p>
                            <p className="item-text">{right.text1}</p>
                            <p className="item-text">{right.text2}</p>
                            <p className="item-text">{right.text3}</p>
                        </div>
                    ))}
                </div>
                <div className="btn-arrow" onClick={handleRightClick}>
                    <img src={arrowRight} className="btn-img" alt="right"/>
                </div>
            </div>
            <Footer verification={title}/>

        </div>
    );
}

export default Rights;
