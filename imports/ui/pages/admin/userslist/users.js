<<<<<<< HEAD
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
=======
import React,{PropTypes} from 'react'
import { Meteor } from 'meteor/meteor'

const UserList = (props) => {

   if(!props.isReady) { (<ul>
        {
            props.users.map((u) => {

                <li>{u.name}</li>

            })
        }
    </ul>)
   }
>>>>>>> c4e54a3a53ff0ba6c3b36cf21a95ad8b2c60b531


};



UserList.propTypes = {

<<<<<<< HEAD
    users: PropTypes.array,
    isReady: PropTypes.bool
=======
    users: PropTypes.array
>>>>>>> c4e54a3a53ff0ba6c3b36cf21a95ad8b2c60b531

}


export default UserList;