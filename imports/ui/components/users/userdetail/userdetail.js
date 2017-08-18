import Meteor from 'meteor/meteor';
import React, { Component,PropTypes } from 'react';

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

UserDetail.propTypes={

    user : PropTypes.object

}
export default UserDetail;