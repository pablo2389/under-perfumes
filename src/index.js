import React from 'react';
import ReactDOM from 'react-dom/client'; // Para React 18
import App from './App';
import './index.css';  // Importación global de CSS
import { BrowserRouter as Router } from 'react-router-dom';

// Aquí debes envolver toda la aplicación en Router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
