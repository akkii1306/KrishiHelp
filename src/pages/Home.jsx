import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../assets/images/cropdigi.jpg'
import img2 from '../assets/images/bots.jpg'
import img3 from '../assets/images/assist.jpg'
import icon1 from '../assets/icons/login.png'
import icon2 from '../assets/icons/dashboard.png'
import icon3 from '../assets/icons/Ai Assistant.png'
import icon4 from '../assets/icons/gear.png'




import "./Home.css";

const services = [
  {
    title: "Crop Yield Prediction",
    image: img1, 
    description:
      "Use AI to forecast crop yields using satellite imagery, weather updates, and soil data for smarter farming decisions."
  },
  {
    title: "Autonomous Farming Bots",
    image: img2,
    description:
      "Deploy AI-powered robots and drones to automate planting, harvesting, and crop monitoring to improve efficiency and reduce labor."
  },
  {
    title: "Sustainable Farming Assistant",
    image: img3,
    description:
      "Optimize your water, fertilizer, and energy use with our AI assistant, promoting environmentally friendly and cost-effective agriculture."
  }
];


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay">
          <h1>Welcome to Krishi Help</h1>
          <p> Krishi Help is your one-stop platform for modern, AI-driven agricultural solutions. We empower farmers with advanced tools like crop yield prediction, autonomous farming bots, and sustainable farming assistance. Whether you’re optimizing resource usage or looking to boost productivity with technology, Krishi Help is here to guide you every step of the way.</p>
          <button onClick={() => navigate("/tools")}>Get Started</button>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      {/* Help Section (Updated to Guide Section) */}
<div className="guide-section">
  <h2>How to Use the Platform</h2>
  <div className="guide-grid">
    <div className="guide-card">
      <img src={icon1} alt="Register Icon" />
      <h3>Register / Login</h3>
      <p>Create an account or log in to get started.</p>
    </div>
    <div className="guide-card">
      <img src={icon2} alt="Dashboard Icon" />
      <h3>Dashboard</h3>
      <p>Access your agriculture analysis and insights.</p>
    </div>
    <div className="guide-card">
      <img src={icon3} alt="AI Assistant Icon" />
      <h3>AI Assistant</h3>
      <p>Ask questions about farming and get instant help.</p>
    </div>
    <div className="guide-card">
      <img src={icon4} alt="Tools Icon" />
      <h3>Tools Section</h3>
      <p>Deploy smart farming bots and tools for automation.</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
