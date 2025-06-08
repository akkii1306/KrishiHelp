import React from "react";
import "./AiDesc.css";
import { useNavigate } from "react-router-dom";

function AiDesc() {
  const navigate = useNavigate();

  return (
    <div className="ai-desc">
      <h2 className="ai-heading">AI Farm Advisor</h2>
      <div className="boxes">
        <div className="features">
          <h3>🌾 Features</h3>
          <ul>
            <li>📊 Real-time farm data analysis</li>
            <li>🌱 Eco-friendly suggestions for crops</li>
            <li>💧 Saves water, fertilizer, and energy</li>
            <li>📉 Reduces cost and waste</li>
            <li>🗺 Location-based smart tips</li>
          </ul>
        </div>

        <div className="guide">
          <h3>🔧 How to Use (Step-by-Step)</h3>
          <ol>
            <li>📥 Open the AI Farm Advisor tool</li>
            <li>📝 Enter your farm info (crop, soil, etc.)</li>
            <li>📤 Upload sensor or manual data</li>
            <li>🤖 Get optimized suggestions instantly</li>
            <li>📈 Apply and track improvement</li>
          </ol>
        </div>
      </div>

      <button className="start-btn" onClick={() => navigate("/ai")}>
        Start Using →
      </button>
    </div>
  );
}

export default AiDesc;
