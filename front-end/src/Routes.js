import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Components/Header/Header';
import Home from './pages/Home/Home';
import Modal from './pages/Modal/Modal';

function index() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/modal" element={<Modal/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default index;