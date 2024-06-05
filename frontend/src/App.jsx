import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "./components/Logo.jsx";
import "./App.css";
import Navigation from "./components/Navigation.jsx";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import SeeTrips from "./pages/SeeTripsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import EditTripPage from "./pages/EditTripPage.jsx";
import CreateTripPage from "./pages/CreateTripPage.jsx";
import TripDetails from "./pages/TripDetailsPage.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Logo />
          <span>Road Trip Planner</span>
          <Navigation />
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
              <Route path="/createtrip" element={<CreateTripPage />} />
              <Route path="/tripdetails/:id" element={<TripDetails />} />
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
