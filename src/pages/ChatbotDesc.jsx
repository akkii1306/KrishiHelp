import React from 'react';
import './ChatbotDesc.css';
import { useNavigate } from 'react-router-dom';

function ChatbotDesc() {
  const navigate = useNavigate();

  return (
    <div className="chatbot">
      <h2 className="chatbot-heading">Bhoomi AI</h2>
      <div className="boxes">
        <div className="features">
          <h3>🌾 Features</h3>
          <ul>
  <li>🤖 Understands voice, image, and text inputs</li>
  <li>🧠 Gives smart, personalized farming answers</li>
  <li>🌾 Detects plant diseases from photos</li>
  <li>🔊 Speaks answers aloud for easy access</li>
  <li>🌐 Designed for rural and regional use</li>
</ul>
        </div>

        <div className="guide">
          <h3>🔧 How to Use (Step-by-Step)</h3>
          <ol>
  <li>✅ Choose input: Image, Text, or Voice</li>
  <li>📸 Upload a plant photo to detect issues</li>
  <li>🗣 Ask a question by typing or speaking</li>
  <li>🔊 Receive reply in voice + text format</li>
  <li>🌾 Easy to use and regional-language ready</li>
</ol>

        </div>
      </div>

      <button className="start-btn" onClick={() => navigate('/chatbot')}>
        Start Using →
      </button>
    </div>
  );
}

export default ChatbotDesc;
