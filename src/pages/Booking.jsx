import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import "../styles/Booking.css";

function Booking() {

    const user = JSON.parse(localStorage.getItem("user"));

    const [booking, setBooking] = useState({

        travellerName: user?.fullName || "",

        email: user?.email || "",

        phone: "",

        transportType: "Flight",

        fromCity: "",

        toCity: "",

        travelDate: "",

        passengers: 1

    });

    const handleChange = (e) => {

        setBooking({

            ...booking,

            [e.target.name]: e.target.value

        });

    };

    const bookNow = async () => {

        try {

            await api.post(
  "/api/bookings",
  booking
);

            alert("🎉 Booking Confirmed Successfully!");

            setBooking({

                travellerName: user?.fullName || "",

                email: user?.email || "",

                phone: "",

                transportType: "Flight",

                fromCity: "",

                toCity: "",

                travelDate: "",

                passengers: 1

            });

        } catch (error) {

            console.log(error);

            alert("Booking Failed!");

        }

    };

    return (

        <>

            <Navbar />

            <div className="booking-page">

                <h1>Book Your Journey</h1>

                <div className="booking-card">

                    <input
                        type="text"
                        name="travellerName"
                        placeholder="Traveller Name"
                        value={booking.travellerName}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={booking.email}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={booking.phone}
                        onChange={handleChange}
                    />

                    <select
                        name="transportType"
                        value={booking.transportType}
                        onChange={handleChange}
                    >

                        <option>Flight</option>

                        <option>Train</option>

                        <option>Bus</option>

                        <option>Taxi</option>

                        <option>Bike</option>

                        <option>Hotel</option>

                    </select>

                    <input
                        type="text"
                        name="fromCity"
                        placeholder="From City"
                        value={booking.fromCity}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="toCity"
                        placeholder="To City"
                        value={booking.toCity}
                        onChange={handleChange}
                    />

                    <input
                        type="date"
                        name="travelDate"
                        value={booking.travelDate}
                        onChange={handleChange}
                    />

                    <select
                        name="passengers"
                        value={booking.passengers}
                        onChange={handleChange}
                    >

                        <option value="1">1 Passenger</option>

                        <option value="2">2 Passengers</option>

                        <option value="3">3 Passengers</option>

                        <option value="4">4 Passengers</option>

                        <option value="5">5 Passengers</option>

                    </select>

                    <button
                        className="search-btn"
                        onClick={bookNow}
                    >
                        Confirm Booking
                    </button>

                </div>

            </div>

        </>

    );

}

export default Booking;