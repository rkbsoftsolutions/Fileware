//
//import {Menu}  from '../imports/startup/client/main.js' 
import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router'
import {Mainlayout}  from '../imports/startup/client/main.js'
import {Home,Header,About,Categories}  from '../imports/ui/templates/home.js'
import {mount} from 'react-mounter';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

FlowRouter.route('/', {name: 'homepage',action() {mount(Mainlayout, {header:<Header/> ,content: <Home/>})}})
FlowRouter.route('/about', {name: 'aboutpage',action() {mount(Mainlayout, {header:<Header/> ,content: <About/>})}})
FlowRouter.route('/categories', {name: 'Categoriespage',action() {mount(Mainlayout, {header:<Header/> ,content: <Categories/>})}})



Meteor.startup(() => 
{
 //   ReactDOM.render(<Menu/>, document.getElementById('render-target'));
});
