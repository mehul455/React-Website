import React from 'react';
import ReactDom from "react-dom";
import App from "./App";

import { BrowserRouter  } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './reduxdark/store'
import "./css/index.css";
import "./css/services.css";
import "./css/about.css";
import "./css/cards.css";






ReactDom.render(
<>
 <BrowserRouter >
 <Provider store={store}>
 <App/>
 </Provider>
   
 </BrowserRouter >   
</>
,document.getElementById("root"));