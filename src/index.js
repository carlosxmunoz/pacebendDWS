import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from "react-router-dom";
import './index.css';
import searchHeader from './Components/searchHeader/searchHeader';
import PaceBendParent from './Components/PaceBendParent/paceBendParent';
import App from './App';

ReactDOM.render(<PaceBendParent />, document.getElementById('root'));
// import components I want to use



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA