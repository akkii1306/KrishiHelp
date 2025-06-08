import React from 'react';
import './BotDesc.css';
import { useNavigate } from 'react-router-dom';

function BotDesc() {
  const navigate = useNavigate();

  return (
    <div className="bot-desc">
      <h2 className="bot-heading">Smart Farm Bot</h2>
      <div className="boxes">
        <div className="features">
          <h3>🌾 Features</h3>
          <ul>
            <li>🧠 Monitor crop health using real-time sensors</li>
            <li>💧 Automate irrigation based on soil moisture</li>
            <li>🚜 Navigate autonomously using obstacle detection</li>
            <li>🌿 Detect weed-prone zones via light anomalies</li>
            <li>📈 Log and analyze environmental data</li>
          </ul>
        </div>

        <div className="guide">
          <h3>🔧 How to Use</h3>
          <ol>
            <li>🔋 Insert battery pack and power on</li>
            <li>🚜 Place at start of crop row — no setup needed</li>
            <li>🌡 Bot begins autonomous data collection</li>
            <li>💧 Auto-irrigates when soil is dry (blue LED = active)</li>
            <li>📲 Optionally view data via mobile app (Bluetooth)</li>
          </ol>
        </div>
      </div>

      <button className="start-btn" onClick={() => navigate('/bot')}>
        Start Using →
      </button>
    </div>
  );
}

export default BotDesc;
