// Dependencies
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Components, Styles, Media
import Logo from "./components/Logo";
import "./App.css";
import Navigation from "./components/Navigation";

// Pages
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import ContactPage from "./pages/ContactPage.js";
import PlanTrip from "./pages/PlanTrip.js";

// Render Content

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Logo />
          <span>Vegan Road Trip Planner</span>
          <Navigation />
          <Link to="/PlanTrip">
            <Button>Plan a New Trip</Button>
          </Link>
        </header>
        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/PlanTrip" element={<PlanTrip />} />
            </Routes>
          </section>
        </main>
        <footer>
          <p>&#169; 2024 Kelly Shields</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
