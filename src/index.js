import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// Determine if we're running in production (GitHub Pages)
const isProduction = process.env.NODE_ENV === 'production';

// Use HashRouter for GitHub Pages deployment to handle routing correctly
// Use BrowserRouter for local development for a cleaner URL experience
const Router = isProduction ? HashRouter : BrowserRouter;

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
