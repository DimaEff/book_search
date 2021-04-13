import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";

import './index.css';
import App from './App';
import store from './Redux/store';


export let render = () => {ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
    document.getElementById('root')
)};

render(store.getState());

store.subscribe(() => {
        render(store.getState());
    }
);
