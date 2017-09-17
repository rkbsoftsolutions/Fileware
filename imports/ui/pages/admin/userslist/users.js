import React, { PropTypes } from 'react'
import { Meteor } from 'meteor/meteor'

const UserList = (users, isReady) => {

    if (!isReady) {
        (<ul>
            {
                users.map((u) => { return <li>{u.name}</li> })
            }
        </ul>
        )

    }


};



UserList.propTypes = {

    users: PropTypes.array,
    isReady: PropTypes.bool

}


export default UserList;