import Meteor from 'meteor/meteor';
import React, { Component,PropTypes } from 'react';

<<<<<<< HEAD
const UserDetail=(user) =>({

    render(){
        return (
            typeof  user.user !=="undefined" ?  user.user.emails[0].address:"Guest"
        )
    }
          

})
=======
const UserDetail=(user) =>(
    <ul>
        <li>
            {    console.log(user)}
            {
           
              typeof  user.user !=="undefined" ?  user.user.emails[0].address:"Guest"
            }
            </li>
    </ul>
)
>>>>>>> c4e54a3a53ff0ba6c3b36cf21a95ad8b2c60b531

UserDetail.propTypes={

    user : PropTypes.object

<<<<<<< HEAD
};

=======
}
>>>>>>> c4e54a3a53ff0ba6c3b36cf21a95ad8b2c60b531
export default UserDetail;