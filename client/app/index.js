import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/Home/Home';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faComment, faRetweet);

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
