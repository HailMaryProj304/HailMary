import React, {useState} from 'react';
import '../CSS/LoginPage.css';

function Register() {
    return (
        <div>
            <form>
                <div className="innerForm">
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <input type="submit" className="button" value="Register"></input>
                    <p>
                        <a href="login">Already registered?</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Register;