import React from 'react';

//import { Router, Route, Link,browserHistory } from 'react-router'
//import {Home,About,Users,User,NoMatch}  from '../../../imports/ui/templates/home.js'

 
// export const Menu =()=>{
//     render( 
//      <Router history={browserHistory}>
//       <Route path="/" component={Home}/>
//       <Route path="about" component={About}/>
//       <Route path="users" component={Users}>
//         <Route path="/user/:userId" component={User}/>
//       </Route>
//       <Route path="*" component={NoMatch}/>
//   </Router>,document.getElementById("menulink")
//     );
// }

export class Mainlayout  extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
         return (
             <div className="container-fluid">
          <div className="container">
           <div className="row">
          <header>
          {this.props.header}
          </header>
          <content> 
          <div className="row">
		  {this.props.content}
          </div>
          </content>
          <footer>
          <div className="row">
          {this.props.footer}
          </div>
          </footer>
		 </div></div></div>);
    }
 }
 
 

 