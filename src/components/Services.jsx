import "./Services.css";
import ServiceCard from "./ServiceCard";

import {
  FaPlane,
  FaTrain,
  FaBus,
  FaTaxi,
  FaMotorcycle,
  FaHotel
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Services() {

    const navigate = useNavigate();

    return(

        <section className="services">

            <h1>Our Services</h1>

            <div className="services-grid">

                <ServiceCard
                    icon={<FaPlane/>}
                    title="Flights"
                    description="Book domestic and international flights."
                    onClick={() => navigate("/booking")}
                />

                <ServiceCard
                    icon={<FaTrain/>}
                    title="Trains"
                    description="Reserve train tickets easily."
                    onClick={() => navigate("/booking")}
                />

                <ServiceCard
                    icon={<FaBus/>}
                    title="Buses"
                    description="Book buses across India."
                    onClick={() => navigate("/booking")}
                />

                <ServiceCard
                    icon={<FaTaxi/>}
                    title="Taxi"
                    description="Local taxi booking."
                    onClick={() => navigate("/booking")}
                />

                <ServiceCard
                    icon={<FaMotorcycle/>}
                    title="Bike Rental"
                    description="Rent bikes for local travel."
                    onClick={() => navigate("/booking")}
                />

                <ServiceCard
                    icon={<FaHotel/>}
                    title="Hotels"
                    description="Find comfortable stays."
                    onClick={() => navigate("/booking")}
                />

            </div>

        </section>

    );

}

export default Services;