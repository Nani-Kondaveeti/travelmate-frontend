import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why">
      <h2>Why Choose TravelMate?</h2>

      <div className="why-container">

        <div className="why-card">
          <h3>✈️ Best Flights</h3>
          <p>Affordable flights with trusted airlines worldwide.</p>
        </div>

        <div className="why-card">
          <h3>🏨 Luxury Hotels</h3>
          <p>Stay in top-rated hotels at the best prices.</p>
        </div>

        <div className="why-card">
          <h3>💰 Best Price</h3>
          <p>We guarantee competitive prices for every trip.</p>
        </div>

        <div className="why-card">
          <h3>📞 24/7 Support</h3>
          <p>Our support team is available anytime to help you.</p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;