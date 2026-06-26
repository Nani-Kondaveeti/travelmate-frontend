import "./SearchSection.css";

function SearchSection() {
  return (
    <section className="search-section">

      <h2>Find Your Perfect Trip</h2>

      <div className="search-box">

        <input
          type="text"
          placeholder="Enter Destination"
        />

        <input
          type="date"
        />

        <input
          type="date"
        />

        <input
          type="number"
          placeholder="Travelers"
        />

        <button>
          Search
        </button>

      </div>

    </section>
  );
}

export default SearchSection;