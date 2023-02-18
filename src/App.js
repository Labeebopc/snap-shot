import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Beaches from './components/beaches/beaches';
import Birds from './components/birds/birds';
import Foods from './components/foods/foods';
import Home from './components/home/home';
import Mountains from './components/mountains/mountains';

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />

        <Routes>
        <Route path='/' element={<Mountains />} />
          <Route path='/beaches' element={<Beaches/>} />
          <Route path='/birds' element={<Birds/>} />
          <Route path='/foods' element={<Foods/>} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
