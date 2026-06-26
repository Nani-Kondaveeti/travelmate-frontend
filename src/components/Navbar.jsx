import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    const [showMenu, setShowMenu] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {

        localStorage.removeItem("user");

        navigate("/");

    };

    return (

        <nav className="navbar">

            <div
                className="logo"
                onClick={() => navigate("/home")}
            >
                ✈ TravelMate
            </div>

            <div className="nav-links">

                <Link
                    className={location.pathname === "/home" ? "active" : ""}
                    to="/home"
                >
                    Home
                </Link>

                <Link
                    className={location.pathname === "/dashboard" ? "active" : ""}
                    to="/dashboard"
                >
                    Dashboard
                </Link>

                <Link
                    className={location.pathname === "/packages" ? "active" : ""}
                    to="/packages"
                >
                    Packages
                </Link>

                <Link
                    className={location.pathname === "/booking" ? "active" : ""}
                    to="/booking"
                >
                    Booking
                </Link>

                <Link
                    className={location.pathname === "/about" ? "active" : ""}
                    to="/about"
                >
                    About
                </Link>

                <Link
                    className={location.pathname === "/contact" ? "active" : ""}
                    to="/contact"
                >
                    Contact
                </Link>

            </div>

            <div className="profile">

                <div
                    className="profile-icon"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <FaUserCircle size={38} />

                    <span>
                        Hi, {user?.fullName || "Traveler"}
                    </span>
                </div>

                {

                    showMenu && (

                        <div className="dropdown">

                            <div className="user-info">

                                <strong>
                                    {user?.fullName}
                                </strong>

                                <small>
                                    {user?.email}
                                </small>

                            </div>

                            <Link to="/dashboard">
                                Dashboard
                            </Link>

                            <Link to="/booking">
                                My Bookings
                            </Link>

                            <button onClick={logout}>
                                Logout
                            </button>

                        </div>

                    )

                }

            </div>

        </nav>

    );

}

export default Navbar;