import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Concepts from './pages/Concepts/Concepts';

function index() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/concepts" element={<Concepts/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default index;