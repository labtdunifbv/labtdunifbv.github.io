import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Concepts from './pages/Concepts/Concepts';
import Rights from './pages/Rights/Rights';
import About from './pages/About/About';
import Utilities from './pages/Utilities/Utilities';

function index() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/conceitos" element={<Concepts/>}/>
            <Route path="/direitos" element={<Rights/>}/>
            <Route path="/sobre" element={<About/>}/>
            <Route path="/utilidades" element={<Utilities/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default index;