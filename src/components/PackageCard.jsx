import "./PackageCard.css";
import { useNavigate } from "react-router-dom";

function PackageCard({ image, title, price, days }) {

    const navigate = useNavigate();

    return (

        <div className="package-card">

            <div className="package-image">

                <img src={image} alt={title} />

                <span className="offer">
                    20% OFF
                </span>

            </div>

            <div className="package-details">

                <h2>{title}</h2>

                <p>⭐⭐⭐⭐⭐ 4.9 Rating</p>

                <p>{days}</p>

                <h3>{price}</h3>

                <button
                    onClick={() => navigate("/booking")}
                >
                    Book Package
                </button>

            </div>

        </div>

    );

}

export default PackageCard;