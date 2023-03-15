import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/Card.jsx';

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render( 
  
  <React.StrictMode>
    <Card />
  </React.StrictMode>
)