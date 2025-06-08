import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">KrishiHelp</h1>
      </div>
      <nav className="header-center">
        <Link to="/">Home</Link>
        <Link to="/tools">Tools</Link>
        <Link to="/register">Register</Link>
       <Link to="/chatbot">Chatbot</Link>
       <Link to="/dashboard">Dashboard</Link>
      </nav>
      <div className="header-right">
        <Globe size={24} className="language-icon" title="Change Language" />
      </div>
    </header>
  );
};

export default Header;
