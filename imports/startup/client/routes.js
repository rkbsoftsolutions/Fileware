import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import Home from '../../ui/pages/home';
import UserLogin from '../../ui/pages/account/login';
import Register from '../../ui/pages/account/register';

const browserHistory = createBrowserHistory();
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={UserLogin}/>
      <Route path="/registernew" component={Register}/>
    </div>
  </Router>
);


