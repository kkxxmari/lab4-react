import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';// Import our own CSS last so it can adjust the Bootstrap defaults.
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';// Attach React to the root element and give every page access to the router.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
