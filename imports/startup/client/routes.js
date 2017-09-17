import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import Home from '../../ui/pages/home';
import UserLogin from '../../ui/pages/account/login';

const browserHistory = createBrowserHistory();
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={UserLogin}/>
    </div>
  </Router>
);


      // <Route path="lists/:id" component={ListPageContainer}/>
      // <Route path="signin" component={AuthPageSignIn}/>
      // <Route path="join" component={AuthPageJoin}/>
      // <Route path="*" component={NotFoundPage}/>