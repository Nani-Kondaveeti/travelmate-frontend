import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";

import background from "../assets/backgrounds/landing.png";

import plane1 from "../assets/vehicles/plane.png";
import plane2 from "../assets/vehicles/plane2.png";

import cloud1 from "../assets/cloud/cloud1.png";
import cloud2 from "../assets/cloud/cloud2.png";

import logo from "../assets/logo/logo.jpeg";

function Landing() {

    const navigate = useNavigate();

    return (

        <div
            className="landing"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >

            <div className="overlay">

                <div className="sky">

                    <img src={cloud1} className="cloud cloud1" alt="" />

                    <img src={cloud2} className="cloud cloud2" alt="" />

                    <img src={plane1} className="plane plane1" alt="" />

                    <img src={plane2} className="plane plane2" alt="" />

                </div>

                <div className="hero-card">

                    <img
                        src={logo}
                        className="logo"
                        alt="TravelMate"
                    />

                    <h1>TravelMate</h1>

                    <p>
                        Explore Beyond Boundaries
                    </p>

                    <div className="buttons">

                        <button
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>

                        <button
                            className="register-btn"
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Landing;