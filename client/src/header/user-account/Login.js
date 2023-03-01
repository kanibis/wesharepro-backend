import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";

export default function Login() {
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);
    let email = details.email;
    let password = details.password;
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    // if (result.name) {
    //   localStorage.setItem("user", JSON.stringify(result))
    //   navigate('/')
    // } else {
    //   alert("Please enter correct details!")
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
    console.log(details);
  };

  return (
    <div className="account-container">
      <div className="login-title">Login</div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="email-container">
          {/* <label for='login-email'>Email</label> */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            id="login-email"
            value={details.email}
            onChange={handleChange}
          />
        </div>
        <div className="password-container">
          {/* <label for='login-password'>Password</label> */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="login-password"
            value={details.password}
            onChange={handleChange}
          />
        </div>
        <div className="login-btn-container">
          <p className="forgot-password">Forgot Password?</p>
          <button type="submit">Login</button>
        </div>
        <div className="not-registered">Not yet registered?</div>
        <div>
          <Link to="/signup" className="signup">
            <button className="register-btn">Register Now</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
