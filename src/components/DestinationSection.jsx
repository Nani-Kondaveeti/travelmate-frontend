import "./DestinationCard.css";

function DestinationCard({ image, title, price }) {
  return (
    <div className="destination-card">

      <img src={image} alt={title} />

      <div className="destination-info">

        <h2>{title}</h2>

        <p>⭐⭐⭐⭐⭐ (4.9)</p>

        <h3>{price}</h3>

        <button>Explore</button>

      </div>

    </div>
  );
}

export default DestinationCard;