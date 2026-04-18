/**
 * index.js
 * 
 * The entry point of the React application.
 * It creates the root React DOM element and renders the App component
 * inside React.StrictMode for development warnings and checks.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Create the root element where the React app will be mounted */
const root = ReactDOM.createRoot(document.getElementById('root'));

/* Render the App component wrapped in StrictMode for development best practices */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* Optional: Measure app performance by logging results or sending to analytics */
reportWebVitals();
