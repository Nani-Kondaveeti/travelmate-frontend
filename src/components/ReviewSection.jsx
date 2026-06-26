import "./ReviewSection.css";

function ReviewSection() {
  return (
    <section className="reviews">

      <h2>What Our Travelers Say</h2>

      <div className="review-container">

        <div className="review-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            "TravelMate made my Goa trip unforgettable.
            Everything was well organized."
          </p>

          <h4>- Rahul Sharma</h4>
        </div>

        <div className="review-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            "Excellent hotel booking and amazing customer
            support throughout the trip."
          </p>

          <h4>- Priya Reddy</h4>
        </div>

        <div className="review-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            "Affordable packages and very easy booking
            process. Highly recommended."
          </p>

          <h4>- Arjun Kumar</h4>
        </div>

      </div>

    </section>
  );
}

export default ReviewSection;