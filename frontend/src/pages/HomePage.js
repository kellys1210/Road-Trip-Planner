import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../App.css";

const HomePage = () => {
  return (
    <div>
      <Link to="/plantrip">
        <Button className="tripButton">Plan a New Trip</Button>
      </Link>
      <Link to="/seetrips">
        <Button className="tripButton">See Planned Trips</Button>
      </Link>
    </div>
  );
};

export default HomePage;
