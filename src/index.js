import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

var destination = document.querySelector('#container');

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

ReactDOM.render(
    <div>
        <App/>
    </div>,
    destination
);
