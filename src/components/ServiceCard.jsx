import "./ServiceCard.css";

function ServiceCard({ icon, title, description, onClick }) {
  return (
    <div className="service-card" onClick={onClick}>
      <div className="service-icon">{icon}</div>

      <h2>{title}</h2>

      <p>{description}</p>

      <button>Book Now</button>
    </div>
  );
}

export default ServiceCard;