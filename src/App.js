import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CharactersPage from './pages/CharactersPage';
import HomePage from './pages/HomePage';
import './App.css'; 
import Trailer from './pages/Trailer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/trailer" element={<Trailer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
