// Dependencies
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components, Styles, Media
import logo from "./logo.svg";
import "./App.css";

// Pages

// Render Content

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header"></header>
        <main>
          <section>
            <Routes></Routes>
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
