import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Intro from './components/Intro';
import {requireAuth} from './utils/AuthService';
import Callback from './components/Callback';
import { BrowserRouter, Router, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import './CSS/index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Route exact path="/"          component={Intro} />
        <Route       path="/main_page" component={App} onEnter={requireAuth}/>
        <Route       path="/Callback"  component={Callback} />
      </div>
    </BrowserRouter>
  )
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
