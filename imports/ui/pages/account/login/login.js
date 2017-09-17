import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import style from './login.css';
   class UserLogin extends Component{

     constructor(props){
       super(props)
       this.submitUserLogin=this.submitUserLogin.bind(this);
     }
    
      submitUserLogin(e){
        e.preventDefault();
         var userName=e.currentTarget.form.userName.value;
         var password=e.currentTarget.form.password.value;
         if(userName!=="" && password!=="")
    
         Meteor.loginWithPassword(userName,password,(res,error)=>{
           debugger;

         })

      }

     render(){
       return (
         <div className={style.container}>
         <form>
           <input type="text" name="userName" ref="UserName" className={style.textbox} />
           <input type="password" name="password" ref="Password"/>
           <button type="submit" onClick={this.submitUserLogin}>Login</button>
          </form>
          <a href="/login">Back</a>
          </div>
         );
     }
 };


export default UserLogin;