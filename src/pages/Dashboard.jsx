import { useEffect, useState } from "react";
import api from "../services/api";

import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

function Dashboard() {

    const user = JSON.parse(localStorage.getItem("user"));

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        if (user) {

            api
  .get(`/api/bookings/${user.email}`)
  .then((response) => {
    setBookings(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

        }

    }, []);

    return (

        <>

            <Navbar />

            <div className="dashboard">

                <div className="dashboard-header">

                    <div>

                        <h1>

                            Welcome, {user?.fullName || "Traveler"} 👋

                        </h1>

                        <p>

                            Ready for your next unforgettable journey?

                        </p>

                    </div>

                </div>

                <div className="stats">

                    <div className="card blue">

                        <h2>{bookings.length}</h2>

                        <span>Total Bookings</span>

                    </div>

                    <div className="card green">

                        <h2>{bookings.length}</h2>

                        <span>Upcoming Trips</span>

                    </div>

                    <div className="card orange">

                        <h2>0</h2>

                        <span>Completed Trips</span>

                    </div>

                    <div className="card purple">

                        <h2>4</h2>

                        <span>Packages Available</span>

                    </div>

                </div>

                <div className="booking-list">

                    <h2>Your Upcoming Trips</h2>

                    {

                        bookings.length === 0 ?

                            (

                                <div className="empty">

                                    <h3>No bookings yet ✈</h3>

                                    <p>

                                        Start exploring amazing destinations by booking your first trip.

                                    </p>

                                </div>

                            )

                            :

                            bookings.map((booking, index) => (

                                <div

                                    className="booking-item"

                                    key={index}

                                >

                                    <h3>

                                        {booking.transportType}

                                    </h3>

                                    <p>

                                        {booking.fromCity}

                                        {"  →  "}

                                        {booking.toCity}

                                    </p>

                                    <p>

                                        Date : {booking.travelDate}

                                    </p>

                                    <p>

                                        Status : {booking.status}

                                    </p>

                                </div>

                            ))

                    }

                </div>

            </div>

        </>

    );

}

export default Dashboard;