import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';
import React from 'react';
import Homes from '../imports/ui/pages/home';
import UserLogin from '../imports/ui/pages/account/login'
import App from '../imports/ui/App';
import  ReactDom  from 'react-dom';

FlowRouter.route('/', {
    name: 'home',
    action() {
      ReactLayout.render(mount(App,{content:"<a href='/login'/>"} ));
    }
  })
  
  FlowRouter.route('/login', {
    name: 'login',
    action() {
      debugger;
      ReactLayout.render(mount(App, { content:<UserLogin />    }));
    }
  })
  
  ReactDom.render(<App/>,document.getElementById("main"))



   