import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import "../styles/Register.css";
import heroImage from "../assets/backgrounds/landing.png";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaPlaneDeparture,
} from "react-icons/fa";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {

      const response = await api.post(
  "/api/users/register",
  user
);

      console.log("Success :", response.data);

      alert("Registration Successful!");

      setUser({
        fullName: "",
        email: "",
        password: "",
        phone: "",
      });

      navigate("/login");

    } catch (error) {

      console.error(error);

      if (error.response) {
        alert(
          typeof error.response.data === "string"
            ? error.response.data
            : JSON.stringify(error.response.data)
        );
      } else {
        alert(error.message);
      }

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
            Explore the World.
            <br />
            Create your free account.
          </p>

          <form onSubmit={registerUser}>

            <div className="input-group">
              <FaUser className="icon" />

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={user.fullName}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">
              <FaEnvelope className="icon" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={user.email}
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
                value={user.password}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">
              <FaPhone className="icon" />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={user.phone}
                onChange={handleChange}
                required
              />

            </div>

            <button type="submit">
              Create Account
            </button>

          </form>

          <div className="footer-text">

            Already have an account?

            <span
              onClick={() => navigate("/login")}
              style={{
                cursor: "pointer",
                color: "#00d4ff",
                fontWeight: "bold",
                marginLeft: "5px",
              }}
            >
              Login
            </span>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Register;