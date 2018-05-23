import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LearnRedirect from './LearnRedirect';

ReactDOM.render(

    // <App />,
    <LearnRedirect />,
    document.getElementById('root'));
registerServiceWorker();
