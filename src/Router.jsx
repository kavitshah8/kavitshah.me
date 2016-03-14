import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import Form from './components/Form.jsx';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/tools/bcrypt-verify" component={Form} />
  </Router>
), document.getElementById('app'));
