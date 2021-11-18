import React, { useRef, useState } from "react";
import { ConceptsData } from "../../Data/ConceptsData";
import gibi1 from'../Concepts/gibi1-1.png';
import gibi2 from'../Concepts/gibi1-2.png';
import gibi3 from'../Concepts/gibi2-1.png';
import gibi4 from'../Concepts/gibi2-2.png';
import gibi5 from'../Concepts/gibi2-3.png';
import gibi6 from'../Concepts/gibi2-4.png';
import gibi7 from'../Concepts/gibi3-1.png';
import arrowLeft from'../Concepts/arrow-left.png';
import arrowRight from'../Concepts/arrow-right.png';
import Footer from "../../Components/Footer/Footer";
import './styles.css';

function Concepts() {
    const [gibis, setGibis] = useState([gibi1, gibi2, gibi3, gibi4, gibi5, gibi6, gibi7]);
    const [concepts, setConcepts] = useState(ConceptsData);
    const [title, setTitle] = useState('Conceitos');
    const carousel = useRef(null);
    const carouselGibi = useRef(null);

    const handleLeftClickGibi = (e) => {
        e.preventDefault();
        carouselGibi.current.scrollLeft -= carouselGibi.current.offsetWidth;
    }
    const handleRightClickGibi = (e) => {
        e.preventDefault();
        carouselGibi.current.scrollLeft += carouselGibi.current.offsetWidth;
    }

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return(
        <div className="container-concepts">
            <h1 className="title-concepts">{title}</h1>
            <div className="container-carousel">
                <div className="btn-arrow" onClick={handleLeftClickGibi}>
                    <img src={arrowLeft} className="btn-img" alt="left"/>
                </div>
                <div className="carousel-gibi" ref={carouselGibi}>
                    {gibis.map(gibi => (
                        <img src={gibi} className="item" alt="gibi"/>
                    ))}
                </div>
                <div className="btn-arrow" onClick={handleRightClickGibi}>
                    <img src={arrowRight} className="btn-img" alt="right"/>
                </div>
            </div> 

            <h1 className="title-concepts">{title}</h1>

            <div className="container-carousel">
                <div className="btn-arrow" onClick={handleLeftClick}>
                    <img src={arrowLeft} className="btn-img" alt="left"/>
                </div>
                <div className="carousel-concepts" ref={carousel}>
                    {concepts.map(concept => (
                        <div className="item-concepts">
                            <p className="item-title">{concept.title}</p>
                            <p className="item-text">{concept.text}</p>
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

export default Concepts;