import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./principal.css"

ReactDOM.render(
  <BrowserRouter>
    <App key={"principal"}/>
  </BrowserRouter>,
  document.getElementById('root')
);


