import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "./firebase.js";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
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
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/dashboard"); // Redirect to the "Home.jsx" component
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Signup</h1>
        <label htmlFor="Name">Name</label>
        <input
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <label htmlFor="email">Email</label>
        <input
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <label htmlFor="Pass">Password</label>
        <input
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className="footer">
          <b className="error">{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
          <img
            src="google.png"
            alt=""
            style={{ height: "50px", width: "250px" ,borderRadius:"10px"}}
            onClick={handleClick}
          />
    </div>
  );
}

export default Signup;
