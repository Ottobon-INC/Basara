import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './modules/common/styles/tokens.css';
import './modules/common/styles/global.css';
import './modules/common/styles/themes.css';
import './modules/common/styles/typography.css';
import './modules/common/styles/responsive.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
