import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Index from './pages/Index';

// styles
import '../scss/style.scss';

// page container
const app = document.getElementById('app');

ReactDOM.render(<Index />, app);