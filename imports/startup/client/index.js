import React from 'react';
import  ReactDom  from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {renderRoutes} from './routes.js';


Meteor.startup(() => {
  ReactDom.render(renderRoutes(), document.getElementById('app'));
});


