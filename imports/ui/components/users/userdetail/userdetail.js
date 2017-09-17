import Meteor from 'meteor/meteor';
import React, { Component,PropTypes } from 'react';

const UserDetail=(user) =>({

    render(){
        return (
            typeof  user.user !=="undefined" ?  user.user.emails[0].address:"Guest"
        )
    }
          

})

UserDetail.propTypes={

    user : PropTypes.object

};

export default UserDetail;