import React from 'react';
import ReactDOM from 'react-dom';
import {requireAuth} from './utils/AuthService';
import { BrowserRouter, Router, Route } from 'react-router-dom';

// child components
import Intro from './components/Intro';
import App from './components/App';
import Callback from './components/Callback';
import AboutMe from './components/AboutMe';

import registerServiceWorker from './registerServiceWorker';
import './CSS/index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Route exact path="/"          component={Intro} />
        <Route       path="/dashboard" component={App} onEnter={requireAuth}/>
        <Route       path="/about_us"  component={AboutMe} />
        <Route       path="/Callback"  component={Callback} />
      </div>
    </BrowserRouter>
  )
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
