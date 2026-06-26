import "./FeaturedPackages.css";

import PackageCard from "./PackageCard";

import goa from "../assets/home/goa.jpg";
import kerala from "../assets/home/kerala.jpg";
import kashmir from "../assets/home/kashmir.jpg";
import ooty from "../assets/home/ooty.jpg";

function FeaturedPackages() {

    return(

        <section className="featured-packages">

            <h1>Featured Holiday Packages</h1>

            <p>
                Best offers handpicked for you.
            </p>

            <div className="package-grid">

                <PackageCard
                    image={goa}
                    title="Goa"
                    days="3 Days / 2 Nights"
                    price="₹8,999"
                />

                <PackageCard
                    image={kashmir}
                    title="Kashmir"
                    days="6 Days / 5 Nights"
                    price="₹18,999"
                />

                <PackageCard
                    image={kerala}
                    title="Kerala"
                    days="5 Days / 4 Nights"
                    price="₹12,499"
                />

                <PackageCard
                    image={ooty}
                    title="Ooty"
                    days="2 Days / 1 Night"
                    price="₹7,499"
                />

            </div>

        </section>

    );

}

export default FeaturedPackages;