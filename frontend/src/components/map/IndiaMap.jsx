import React, { useState } from "react";
import { statePlayerData } from "./mapData";
import IndiaSVG from "../../assets/maps/india.svg?react";
import "../../styles/IndiaMap.css";

const IndiaMap = () => {
  const [activeState, setActiveState] = useState(null);

  return (
    <div className="india-map-wrapper">
      <div className="map-container">

        <svg viewBox="0 0 1000 1000" className="india-map">

          {/* ✅ Actual India Map */}
          <IndiaSVG
            className="india-svg"
            onMouseOver={(e) => {
              if (e.target.tagName === "path") {
                setActiveState(e.target.id);
              }
            }}
            onMouseOut={() => setActiveState(null)}
          />

          {/* ✅ Player dots */}
          {Object.entries(statePlayerData).map(([state, data]) =>
            data.cities.map((city, index) => (
              <circle
                key={`${state}-${index}`}
                cx={city.x}
                cy={city.y}
                r="4"
                className="player-dot"
              />
            ))
          )}

        </svg>

      </div>

      <div className="map-info">
        {activeState ? (
          <>
            <h3>{activeState}</h3>
            <p>
              <strong>{statePlayerData[activeState]?.players ?? 0}</strong>{" "}
              registered players
            </p>
            <p>Grassroots talent identified and tracked transparently.</p>
          </>
        ) : (
          <>
            <h3>Pan-India Coverage</h3>
            <p>
              Hover over a state to see how talent is emerging even from the
              most remote regions.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default IndiaMap;
