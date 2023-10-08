import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth, provider } from "./firebase.js";
function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("email");
    if (user) {
      navigate("/dashboard"); // Redirect to the "Home.jsx" component
    }
  }, [navigate]);

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        localStorage.setItem("email", data.user.email);
        navigate("/dashboard"); // Redirect to the "Home.jsx" component
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/dashboard");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Login</h1>
        <label htmlFor="email">Email</label>
        <input
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <label htmlFor="Pass">Password</label>
        <input
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className="footer">
          <b className="error">{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
      <img
        src="google.png"
        alt=""
        style={{ height: "50px", width: "250px", borderRadius: "10px" }}
        onClick={handleClick}
      />
    </div>
  );
}

export default Login;
