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


};



UserList.propTypes = {

    users: PropTypes.array

}


export default UserList;