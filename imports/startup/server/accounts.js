import {Meteor} from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(()=>{

    Accounts.config({
        sendVerificationEmail:false
    })
   console.log("server start")
   var user={
       username:"staronline1985@gmail.com",
       email:"staronline1985@gmail.com",
   password:"123456",
   profile:{
       firstName:"Demo User" ,
       lastName : "User",
       contactno : "1234567890",
       city:"ABC",
       state:"ABC11111"
   }
}
  var _users= Accounts.findUserByUsername(user.username);
  if(typeof _users==="undefined"){
  const userId= Accounts.createUser(user);
  console.log(userId);
      
  }
})
