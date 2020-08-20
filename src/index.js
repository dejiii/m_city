import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
// import "./firebase";
import "./Resources/app.css";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes /> 
    </BrowserRouter>
  ) 
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);