import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import './reset.css';
import Main from './Components/Main';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);
