import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';

const styleIndex = {
  container: {
    height: 'auto',
    width: '400px',
    margin: 'auto',
    background: 'radial-gradient(#3e3030, #3c3a3a, #292929)'
  },
  text: {
    color: 'darkblue'
  }
}

const element = (
  <div style={styleIndex.container}>
    <App />
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

