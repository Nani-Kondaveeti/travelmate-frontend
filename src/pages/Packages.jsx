import Navbar from "../components/Navbar";
import "../styles/Packages.css";

import goa from "../assets/home/goa.jpg";
import kerala from "../assets/home/kerala.jpg";
import kashmir from "../assets/home/kashmir.jpg";
import ooty from "../assets/home/ooty.jpg";

function Packages() {

    const packages = [

        {
            place:"Goa",
            image:goa,
            price:"₹8,999",
            days:"3 Days / 2 Nights"
        },

        {
            place:"Kerala",
            image:kerala,
            price:"₹12,499",
            days:"5 Days / 4 Nights"
        },

        {
            place:"Kashmir",
            image:kashmir,
            price:"₹18,999",
            days:"6 Days / 5 Nights"
        },

        {
            place:"Ooty",
            image:ooty,
            price:"₹7,499",
            days:"2 Days / 1 Night"
        }

    ];

    return (

        <>
            <Navbar />

            <div className="packages-page">

                <h1>Holiday Packages</h1>

                <div className="package-grid">

                    {

                        packages.map((pkg,index)=>(

                            <div className="package-card" key={index}>

                                <img
                                    src={pkg.image}
                                    alt={pkg.place}
                                />

                                <div className="package-info">

                                    <h2>{pkg.place}</h2>

                                    <p>{pkg.days}</p>

                                    <h3>{pkg.price}</h3>

                                    <button>
                                        Book Package
                                    </button>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </>

    );

}

export default Packages;