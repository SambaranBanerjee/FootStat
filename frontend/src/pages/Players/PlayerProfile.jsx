import React from "react";
//import { useParams } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import "../../styles/PlayerProfile.css";

// Mock Data for the Radar Chart (The Pentagon)
const attributeData = [
  { subject: "ATT", A: 85, fullMark: 100 },
  { subject: "TEC", A: 92, fullMark: 100 },
  { subject: "TAC", A: 60, fullMark: 100 },
  { subject: "DEF", A: 65, fullMark: 100 },
  { subject: "CRE", A: 88, fullMark: 100 },
];

// Mock Data for Career Table
const careerStats = [
  {
    year: "24/25",
    team: "Real Madrid",
    teamLogo: "https://via.placeholder.com/20/ffffff/000000?text=RM",
    mp: 15,
    min: 855,
    gls: 5,
    ast: 2,
    asr: "7.85",
  },
  {
    year: "23/24",
    team: "AC Milan",
    teamLogo: "https://via.placeholder.com/20/ff0000/000000?text=ACM",
    mp: 28,
    min: 2100,
    gls: 12,
    ast: 8,
    asr: "7.42",
  },
  {
    year: "22/23",
    team: "Chelsea",
    teamLogo: "https://via.placeholder.com/20/0000ff/ffffff?text=CFC",
    mp: 30,
    min: 2450,
    gls: 10,
    ast: 5,
    asr: "7.10",
  },
  {
    year: "21/22",
    team: "Dortmund",
    teamLogo: "https://via.placeholder.com/20/ffff00/000000?text=BVB",
    mp: 32,
    min: 2700,
    gls: 15,
    ast: 10,
    asr: "7.95",
  },
];

const PlayerProfile = () => {
  //const { id } = useParams();

  // In a real app, you would fetch player details using the 'id' here.

  return (
    <div className="profile-container">
      <div className="profile-content">
        
        {/* LEFT SECTION: CAREER */}
        <div className="career-section">
          <div className="section-header">CAREER</div>

          {/* Filters Top Row */}
          <div className="filters-row">
            <div className="dropdown">All Club Competitions ▼</div>
            <div className="filter-icon">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </div>
          </div>

          {/* Filters Second Row */}
          <div className="filters-row secondary">
            <div className="pill-group">
              <span className="pill-label">Team</span>
              <button className="pill-btn">All Teams ▼</button>
            </div>
            <div className="pill-group">
              <span className="pill-label">Home/Away</span>
              <button className="pill-btn">Total ▼</button>
            </div>
          </div>

          {/* Stats Tabs */}
          <div className="stats-tabs">
            <button className="tab active">Summary</button>
            <button className="tab">Shooting</button>
            <button className="tab">Team Play</button>
            <button className="tab">Passing</button>
            <button className="tab">Defending</button>
            <button className="tab">Additional</button>
          </div>

          {/* Stats Table */}
          <div className="table-wrapper">
            <table className="career-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Team</th>
                  <th>MP</th>
                  <th>MIN</th>
                  <th>GLS</th>
                  <th>AST</th>
                  <th>ASR</th>
                </tr>
              </thead>
              <tbody>
                {careerStats.map((stat, index) => (
                  <tr key={index}>
                    <td className="year-col">{stat.year}</td>
                    <td className="team-col">
                      <img src={stat.teamLogo} alt={stat.team} />
                    </td>
                    <td>{stat.mp}</td>
                    <td>{stat.min}</td>
                    <td>{stat.gls}</td>
                    <td>{stat.ast}</td>
                    <td>
                      <span className="rating-badge">{stat.asr}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT SECTION: ATTRIBUTES */}
        <div className="attributes-section">
          <div className="section-header">
            ATTRIBUTE OVERVIEW <span className="info-icon">ⓘ</span>
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={attributeData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: 'white', fontSize: 12, fontWeight: 'bold' }} 
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Player"
                  dataKey="A"
                  stroke="rgb(121, 181, 2)"
                  strokeWidth={3}
                  fill="rgb(121, 181, 2)"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="compare-section">
            <label>Search to Compare Players</label>
            <input type="text" placeholder="Type player name..." />
          </div>
          
          <div className="chart-footer">
            ⓘ Click on the graph to see the average values for this position
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlayerProfile;