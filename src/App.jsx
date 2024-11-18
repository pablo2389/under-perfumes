import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'; // Importación del CSS de la aplicación

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/under-perfumes" element={<Home />} />
  </Routes>
);

export default App;
