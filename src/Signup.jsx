import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="center">
      <div className="form-container gradient-bg">
        <h1>Signup Form</h1>
        <div className="form-content">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" />

          <label htmlFor="phone">Phone No.</label>
          <input type="number" id="phone" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" />

          <label htmlFor="cpass">Confirm Password</label>
          <input type="password" id="cpass" />

          <button type="submit" className="btn">Submit</button>
          <button type="submit" className="btn" id='login'><Link to="/login">Login</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
