import React from 'react';
import './Tools.css';
import tool1 from '../assets/images/toolChat.png';
import tool2 from '../assets/images/toolPredict.png';
import tool3 from '../assets/images/toolRobot.png';
import { useNavigate } from 'react-router-dom';

function Tools() {
  const navigate =useNavigate();
  const toolsData = [
    {
      title: 'Bhoomi AI chatbot',
      description: 'Bhoomi AI understands your farm. Get real advice using your words, images, or voice.',
      image: tool1,
      button:'/chatbot-desc',
    },
    {
      title: 'AI Farm Advisor',
      description: 'Analyzes your data to suggest eco-friendly, resource-efficient farming practices.',
      image:tool2,
      button:'/ai-desc',
    },
    {
      title: 'Smart Farm Bot',
      description: 'Automatically monitors crops and waters them efficiently with no setup needed.',
      image: tool3,
      button:'/bot-desc'
    },
  ];

  return (
    <div className="tools">
      <div className="tools-section">
      <h2 className="heading-tools">Tools For You</h2>
      </div>
      <div className="card-container">
        {toolsData.map((tool, index) => (
          <div className="tool-card" key={index}>
            <img src={tool.image} alt={tool.title} className="card-image" />
            <div className="card-gradient">
              <div className="card-text">
                <h2>{tool.title}</h2>
                <p>{tool.description}</p>
                <button onClick={()=>navigate(tool.button)} className="start-button">Start Exploring →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
