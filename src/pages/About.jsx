import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About TravelMate</h1>

        <p className="tagline">
          Your trusted companion for planning memorable journeys.
        </p>

        <h2>Who We Are</h2>

        <p>
          TravelMate is an online travel planning platform that helps users
          explore destinations, organize trips, and make travel easier.
        </p>

        <h2>Our Mission</h2>

        <p>
          Our mission is to simplify travel planning by providing an easy,
          secure, and user-friendly experience for every traveler.
        </p>

        <h2>Features</h2>

        <ul>
          <li>🌍 Explore famous destinations</li>
          <li>🗺️ Plan your itinerary</li>
          <li>📅 Manage your trips</li>
          <li>🔒 Secure user accounts</li>
          <li>📱 Mobile-friendly design</li>
        </ul>

        <h2>Our Vision</h2>

        <p>
          We aim to become the most trusted travel companion for travelers
          around the world.
        </p>
      </div>
    </div>
  );
}

export default About;
