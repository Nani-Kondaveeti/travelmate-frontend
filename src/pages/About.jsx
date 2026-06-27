import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">About TravelMate</h1>
        <p className="text-muted">
          Your trusted companion for planning memorable journeys.
        </p>
      </div>

      <div className="card shadow border-0 p-4">
        <h3 className="mb-3">Who We Are</h3>
        <p>
          TravelMate is a smart travel planning platform designed to make
          travelling easier, faster, and more enjoyable. Whether you're planning
          a family vacation, a solo adventure, or a business trip, TravelMate
          helps you discover destinations, organize itineraries, and manage your
          travel plans effortlessly.
        </p>

        <h3 className="mt-4 mb-3">Our Mission</h3>
        <p>
          Our mission is to simplify travel planning by providing users with an
          easy-to-use platform that offers destination information, personalized
          recommendations, and seamless trip management.
        </p>

        <h3 className="mt-4 mb-3">Why Choose TravelMate?</h3>

        <ul>
          <li>🌍 Discover popular tourist destinations.</li>
          <li>📅 Plan trips with ease.</li>
          <li>🗺️ Organize your travel itinerary.</li>
          <li>🔒 Secure and user-friendly platform.</li>
          <li>📱 Responsive design for desktop and mobile.</li>
        </ul>

        <h3 className="mt-4 mb-3">Our Vision</h3>

        <p>
          We believe every journey should be memorable. TravelMate aims to
          become your trusted travel companion by making travel planning simple,
          organized, and stress-free.
        </p>
      </div>
    </div>
  );
};

export default About;
