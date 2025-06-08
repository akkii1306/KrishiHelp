import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Register from "./pages/Register"; 
import Chatbot from "./pages/Chatbot";
import Dashboard from "./pages/Dashboard";
import ChatbotDesc from "./pages/ChatbotDesc";
import AiDesc from "./pages/AiDesc";
import BotDesc from "./pages/BotDesc";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chatbot-desc" element={<ChatbotDesc></ChatbotDesc>}></Route>
          <Route path="/ai-desc" element={<AiDesc></AiDesc>}></Route>
          <Route path="/bot-desc" element={<BotDesc></BotDesc>}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
