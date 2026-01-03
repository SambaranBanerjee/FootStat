import React from "react";
import "../styles/Home.css";
import IndiaMap from "../components/map/IndiaMap";

const Home = () => {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Empowering Football Talent</h1>
          <p>
            A decentralized platform to discover, evaluate, and elevate football
            players from grassroots to global arenas.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="feature-section">
        <div className="feature">
          <img src="assets/assessment.png" alt="Assessment" />
          <h2>Player Skill Assessment</h2>
          <p>
            Track performance metrics like goals, assists, passes, and overall
            match impact with verified local administrators.
          </p>
        </div>

        <div className="feature">
          <img src="assets/selection.png" alt="Selection" />
          <h2>Player Selection</h2>
          <p>
            Top-performing players are ranked transparently and forwarded to
            higher authorities for national and international opportunities.
          </p>
        </div>

        <div className="feature">
          <img src="assets/funding.png" alt="Funding" />
          <h2>Funding & Scholarships</h2>
          <p>
            Enable government bodies and private organizations to support
            deserving players with funding and scholarships.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <IndiaMap/>
      </section>

      {/* Call To Action */}
      <section className="cta-section">
        <h2>Building the Future of Football</h2>
        <p>
          Transparency, merit, and opportunity — all in one ecosystem.
        </p>
      </section>

    </div>
  );
};

export default Home;
