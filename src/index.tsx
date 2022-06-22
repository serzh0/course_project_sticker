import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './assets/styles/main.scss';
// import 'antd/dist/antd.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
