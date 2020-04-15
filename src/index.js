import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {ProfileProvider} from "./contexts/ProfileContext";
import {BrowserRouter} from 'react-router-dom';
// import theme from './style/theme';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
// import 'typeface-open-sans'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(

                <App/>

, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
