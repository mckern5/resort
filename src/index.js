import * as serviceWorker from './serviceWorker';

import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

//import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
