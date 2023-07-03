import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
