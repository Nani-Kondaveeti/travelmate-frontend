import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

import "../styles/Login.css";
import heroImage from "../assets/backgrounds/landing.png";

import {
  FaEnvelope,
  FaLock,
  FaPlaneDeparture,
} from "react-icons/fa";

function Login() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (e) => {

    e.preventDefault();

    try {

      const response = await api.post(
        "/api/users/login",
        loginData
      );

      // Backend returns string if login fails
      if (typeof response.data === "string") {
        alert(response.data);
        return;
      }

      // Save logged-in user
      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      alert("Login Successful!");

      // Redirect to Dashboard
      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data ||
        "Invalid Email or Password"
      );

    }

  };

  return (

    <div
      className="register-container"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >

      <div className="overlay">

        <div className="register-card">

          <div className="logo-circle">
            <FaPlaneDeparture />
          </div>

          <h1>TravelMate</h1>

          <p>
            Welcome Back
            <br />
            Login to continue
          </p>

          <form onSubmit={loginUser}>

            <div className="input-group">

              <FaEnvelope className="icon" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={loginData.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <FaLock className="icon" />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleChange}
                required
              />

            </div>

            <button type="submit">
              Login
            </button>

          </form>

          <div className="footer-text">

            Don't have an account?

            <Link
              to="/register"
              style={{
                color: "#00d4ff",
                marginLeft: "5px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Register
            </Link>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Login;