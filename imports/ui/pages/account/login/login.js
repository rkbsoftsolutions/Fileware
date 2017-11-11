import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

class UserLogin extends Component {

  constructor(props) {
    super(props);
    this.submitUserLogin = this.submitUserLogin.bind(this);
  }

  submitUserLogin(e) {
    e.preventDefault();
    var userName = e.currentTarget.form.userName.value;
    var password = e.currentTarget.form.password.value;
    if (userName !== '' && password !== '')
      Meteor.loginWithPassword(userName, password, (res, error) => {

      });

  }

  render() {
    return (
      <div className="container">
        <form>
          <input type="text" placeholder="Email Here" name="userName" ref="UserName" className="form-control p5" />
          <input type="password" placeholder="Password here" name="password" ref="Password" className="form-control p5" />
          <button type="submit" className="btn p5" onClick={this.submitUserLogin}>Login</button>
          <a href="/registernew" className="btn p5">Don't have account ? Register it free</a>
        </form>

      </div>
    );
  }
}


export default UserLogin;
