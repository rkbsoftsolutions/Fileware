import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

class Register extends Component {

    constructor(props) {
        super(props);
        this.submitUserLogin = this.submitUserLogin.bind(this);
    }

    submitUserLogin(e) {
        e.preventDefault();
        var userName = e.currentTarget.form.userName.value;
        var password = e.currentTarget.form.password.value;
        // if (userName !== "" && password !== ""){}

    }


    render() {
        return (
            <div className="container">
                <form>
                    <input type="text" placeholder="First Name" name="firstName" ref="firstName" className="form-control p5" />
                    <input type="text" placeholder="Last Name" name="lastName" ref="lastName" className="form-control p5" />
                    <input type="email" placeholder="Email Here" name="email" ref="email" className="form-control p5" />
                    <input type="password" placeholder="Password here" name="password" ref="Password" className="form-control p5" />

                    <button type="submit" className="btn p5" onClick={this.submitUserLogin}>Register</button>

                    <a href="/login" className="btn p5">Already have account.</a>

                </form>

            </div>
        );


    }


}

export default Register;


