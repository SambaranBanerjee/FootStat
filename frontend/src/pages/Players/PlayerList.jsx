import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/PlayerList.css";

const dummyPlayers = [
  {
    id: 1,
    name: "ARJUN MEHTA",
    location: "Kolkata",
    image: "/assets/players/player1.jpg", // Ensure this path exists or use a placeholder
    overall: 86,
    position: "ST",
    nation: "🇮🇳",
    variant: "red", // To style the background color
    stats: {
      pac: 88,
      sho: 84,
      pas: 82,
      dri: 85,
      def: 70,
      phy: 78,
    },
  },
  {
    id: 2,
    name: "RAHUL SINGH",
    location: "Delhi",
    image: "/assets/players/player2.jpg",
    overall: 90,
    position: "CM",
    nation: "🇮🇳",
    variant: "green",
    stats: {
      pac: 92,
      sho: 88,
      pas: 85,
      dri: 90,
      def: 68,
      phy: 80,
    },
  },
  {
    id: 3,
    name: "S. CHETTRI",
    location: "Bengaluru",
    image: "/assets/players/player3.jpg",
    overall: 94,
    position: "CF",
    nation: "🇮🇳",
    variant: "gold",
    stats: {
      pac: 85,
      sho: 95,
      pas: 90,
      dri: 88,
      def: 60,
      phy: 75,
    },
  },
];

const PlayerList = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  const sortedPlayers = [...dummyPlayers]
    .filter((player) =>
      filterLocation ? player.location === filterLocation : true
    )
    .sort((a, b) => {
      if (!sortBy) return 0;
      return b.stats[sortBy] - a.stats[sortBy];
    });

  return (
    <div className="player-list-container">
      {/* FILTER & SORT */}
      <div className="player-controls">
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort by Stat</option>
          <option value="pac">Pace</option>
          <option value="sho">Shooting</option>
          <option value="pas">Passing</option>
          <option value="dri">Dribbling</option>
          <option value="def">Defense</option>
          <option value="phy">Physical</option>
        </select>

        <select onChange={(e) => setFilterLocation(e.target.value)}>
          <option value="">Filter by Location</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Delhi">Delhi</option>
          <option value="Bengaluru">Bengaluru</option>
        </select>
      </div>

      {/* PLAYER CARDS GRID */}
      <div className="player-grid">
        {sortedPlayers.map((player) => (
          <div
            key={player.id}
            className={`player-card ${player.variant}`}
            onClick={() => navigate(`/players/${player.id}`)}
          >
            <div className="card-inner">
              {/* --- FRONT OF CARD (The Gaming Card Look) --- */}
              <div className="card-front">
                
                {/* Top Section: Rating/Nation & Image */}
                <div className="card-top">
                  <div className="card-info">
                    <div className="card-rating">{player.overall}</div>
                    <div className="card-position">{player.position}</div>
                    <div className="card-nation">{player.nation}</div>
                  </div>
                  <div className="card-image-container">
                    {/* Fallback image if source fails */}
                    <img 
                      src={player.image} 
                      alt={player.name} 
                      onError={(e) => {e.target.src='https://via.placeholder.com/150/000000/FFFFFF/?text=User'}} 
                    />
                  </div>
                </div>

                {/* Middle: Name */}
                <div className="card-name-section">
                  <h3 className="card-name">{player.name}</h3>
                  <div className="card-divider"></div>
                </div>

                {/* Bottom: Stats Grid */}
                <div className="card-stats-grid">
                  <div className="stat-row">
                    <span className="stat-label">PAC</span>
                    <span className="stat-value">{player.stats.pac}</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">DRI</span>
                    <span className="stat-value">{player.stats.dri}</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">SHO</span>
                    <span className="stat-value">{player.stats.sho}</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">DEF</span>
                    <span className="stat-value">{player.stats.def}</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">PAS</span>
                    <span className="stat-value">{player.stats.pas}</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">PHY</span>
                    <span className="stat-value">{player.stats.phy}</span>
                  </div>
                </div>
              </div>

              {/* --- BACK OF CARD (Extra Details / Flip) --- */}
              <div className="card-back">
                <h3>Player Details</h3>
                <div className="back-details">
                  <p><strong>Location:</strong> {player.location}</p>
                  <p><strong>Club:</strong> Tech FC</p>
                  <p><strong>Matches:</strong> 42</p>
                  <p><strong>Goals:</strong> 28</p>
                </div>
                <div className="view-profile-btn">View Full Profile</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;