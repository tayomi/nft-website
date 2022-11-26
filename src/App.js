import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Exp from './pages/Exp';
import Home from './pages/Home';
import Invest from './pages/Invest';
import Marketplace from './pages/Marketplace';
import NewsSection from './pages/NewsSection';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/exp' exact element={<Exp/>} />
          <Route path='/marketplace' exact element={<Marketplace/>} />
          <Route path='/newssection' exact element={<NewsSection/>} />
          <Route path='/invest' exact element={<Invest/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
