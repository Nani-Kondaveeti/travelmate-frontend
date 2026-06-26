import "./Hero.css";
import hero from "../assets/home/hero.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="hero-overlay">

        <div className="hero-content">

          <span className="hero-tag">
            ✈ Your Next Adventure Starts Here
          </span>

          <h1>
            Explore The World
            <br />
            With <span>TravelMate</span>
          </h1>

          <p>
            Book Flights, Trains, Hotels, Buses and
            discover unforgettable destinations with
            one powerful platform.
          </p>

          <div className="hero-search">

            <input
              type="text"
              placeholder="Search Destination..."
            />

            <button>
              Explore Now
            </button>

          </div>

          <div className="hero-stats">

            <div className="stat-box">
              <h2>12K+</h2>
              <span>Happy Travelers</span>
            </div>

            <div className="stat-box">
              <h2>800+</h2>
              <span>Destinations</span>
            </div>

            <div className="stat-box">
              <h2>120+</h2>
              <span>Hotels</span>
            </div>

            <div className="stat-box">
              <h2>50+</h2>
              <span>Airlines</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;