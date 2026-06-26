import "./PackageSection.css";

function PackageSection() {
  return (
    <section className="packages">

      <h2>Popular Tour Packages</h2>

      <div className="package-container">

        <div className="package-card">
          <h3>Goa Beach Holiday</h3>
          <p>📍 Goa</p>
          <p>🗓️ 5 Days / 4 Nights</p>
          <p>⭐ 4.8 Rating</p>
          <h4>₹12,999</h4>
          <button>Book Now</button>
        </div>

        <div className="package-card">
          <h3>Maldives Luxury Tour</h3>
          <p>📍 Maldives</p>
          <p>🗓️ 6 Days / 5 Nights</p>
          <p>⭐ 4.9 Rating</p>
          <h4>₹39,999</h4>
          <button>Book Now</button>
        </div>

        <div className="package-card">
          <h3>Manali Adventure</h3>
          <p>📍 Himachal Pradesh</p>
          <p>🗓️ 4 Days / 3 Nights</p>
          <p>⭐ 4.7 Rating</p>
          <h4>₹15,999</h4>
          <button>Book Now</button>
        </div>

      </div>

    </section>
  );
}

export default PackageSection;