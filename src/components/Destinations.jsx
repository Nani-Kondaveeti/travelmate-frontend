import "./Destinations.css";

import DestinationCard from "./DestinationCard";

import goa from "../assets/home/goa.jpg";
import kerala from "../assets/home/kerala.jpg";
import kashmir from "../assets/home/kashmir.jpg";
import ooty from "../assets/home/ooty.jpg";

function Destinations() {

    return (

        <section className="destinations">

            <h1>
                Popular Destinations
            </h1>

            <p>

                Choose your next unforgettable holiday destination.

            </p>

            <div className="destination-grid">

                <DestinationCard
                    image={goa}
                    title="Goa"
                    price="₹8,999"
                />

                <DestinationCard
                    image={kashmir}
                    title="Kashmir"
                    price="₹18,999"
                />

                <DestinationCard
                    image={kerala}
                    title="Kerala"
                    price="₹12,499"
                />

                <DestinationCard
                    image={ooty}
                    title="Ooty"
                    price="₹7,499"
                />

            </div>

        </section>

    );

}

export default Destinations;