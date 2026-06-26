import "./DestinationCard.css";
import { useNavigate } from "react-router-dom";

function DestinationCard({ image, title, price }) {

    const navigate = useNavigate();

    return (

        <div className="destination-card">

            <div className="image-box">

                <img
                    src={image}
                    alt={title}
                />

            </div>

            <div className="destination-info">

                <div className="top-row">

                    <h2>{title}</h2>

                    <span className="rating">
                        ⭐ 4.9
                    </span>

                </div>

                <p>

                    Experience breathtaking views,
                    luxury stays and unforgettable adventures.

                </p>

                <div className="bottom-row">

                    <h3>{price}</h3>

                    <button
                        onClick={() => navigate("/booking")}
                    >
                        Book Now →
                    </button>

                </div>

            </div>

        </div>

    );

}

export default DestinationCard;