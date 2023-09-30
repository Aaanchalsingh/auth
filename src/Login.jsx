import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="center">
      <div className="form-container gradient-bg">
        <h1>Login</h1>
        <div className="form-content">
          <label htmlFor="lemail">Email</label>
          <input type="email" id="lemail" />

          <label htmlFor="lpass">Password</label>
          <input type="password" id="lpass" />

          <button type="submit" className="btn">Submit</button>
          <button type="submit" className="btn"><Link to="/signup">Signup</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Login;
