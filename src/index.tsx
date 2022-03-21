import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App}from './components/app/App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/Store-redux";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
