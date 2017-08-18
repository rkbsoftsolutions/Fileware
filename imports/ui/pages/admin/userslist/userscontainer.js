import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Users} from '../../../../api/users';
import UserList from './users'

export default UserListContainer = createContainer(() => {
  debugger;
  const Isready=Meteor.subscribe('users.admin');
  return {
    users: Users.find().fetch(),
    isReady:Isready.ready()
  };
}, UserList);