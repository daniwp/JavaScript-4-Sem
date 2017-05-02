import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import bookStore from './models/bookStore';
import RouterComponent from './RouterComponent'

ReactDOM.render(
  <RouterComponent  bookStore={bookStore}/>,
  document.getElementById('root')
);
