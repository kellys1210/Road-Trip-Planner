// Dependencies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components, Styles, Media
import Logo from "./components/Logo.js";
import "./App.css";
import Navigation from "./components/Navigation.js";

// Pages
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import ContactPage from "./pages/ContactPage.js";
import SeeTrips from "./pages/SeeTrips.js";
import LoginPage from "./pages/LoginPage.js";
import EditTripPage from "./pages/EditTripPage.js";

// Render Content
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Logo />
          <span>Vegan Road Trip Planner</span>
          <Navigation/>
        </header>
        <main className="App-main">
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/edittrip/:id" element={<EditTripPage />} /> 
              <Route path="/seetrips" element={<SeeTrips />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </section>
        </main>
        <footer className="App-footer">
          <p>&#169; 2024 Kelly Shields</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
