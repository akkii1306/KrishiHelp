import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const services = [
  {
    title: "Crop Yield Prediction",
    image: "/images/cropdigi.jpg", // Replace with actual path
    description:
      "Use AI to forecast crop yields using satellite imagery, weather updates, and soil data for smarter farming decisions."
  },
  {
    title: "Autonomous Farming Bots",
    image: "/images/bots.jpg",
    description:
      "Deploy AI-powered robots and drones to automate planting, harvesting, and crop monitoring to improve efficiency and reduce labor."
  },
  {
    title: "Sustainable Farming Assistant",
    image: "/images/assist.jpg",
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
      <img src="/icons/login.png" alt="Register Icon" />
      <h3>Register / Login</h3>
      <p>Create an account or log in to get started.</p>
    </div>
    <div className="guide-card">
      <img src="/icons/dashboard.png" alt="Dashboard Icon" />
      <h3>Dashboard</h3>
      <p>Access your agriculture analysis and insights.</p>
    </div>
    <div className="guide-card">
      <img src="/icons/Ai Assistant.png" alt="AI Assistant Icon" />
      <h3>AI Assistant</h3>
      <p>Ask questions about farming and get instant help.</p>
    </div>
    <div className="guide-card">
      <img src="/icons/gear.png" alt="Tools Icon" />
      <h3>Tools Section</h3>
      <p>Deploy smart farming bots and tools for automation.</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
