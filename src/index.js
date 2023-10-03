import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import  { store }  from "./Redux";

ReactDOM.render(
  <Provider store={store}> <BrowserRouter basename="/MelvinCourageux_13_21072022"><App/></BrowserRouter> </Provider>,
  document.getElementById("root"))


