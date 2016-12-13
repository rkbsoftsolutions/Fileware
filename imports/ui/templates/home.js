import React from 'react';
import {CategoryAdd} from './Categories/add/add.js'


export class Header extends React.Component{

    constructor(props){
        super(props)
    }
    render(){return(
<div className="row">
 <ul className="nav navbar-nav">
 <li><a href="/">Home</a></li>
 <li><a href="/about">About Us</a></li>
 <li><a href="/categories">Categories</a></li>
 </ul>
</div>
    )
    }

}



export class Home  extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
         return (<h2>home text here </h2>);
    }
 }

 export class About  extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
      return (<div> About Us here </div>);
    }
 }
 export class Categories  extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
     return (<CategoryAdd />);
    }
 }

 export class User  extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
         return (
        <div> User here </div>
    );
    }
 }

 export class NoMatch  extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
         return (
        <div className="col-md-9">
        <div> NoMatch here </div>
    </div>
    );
    }
 }

 

 