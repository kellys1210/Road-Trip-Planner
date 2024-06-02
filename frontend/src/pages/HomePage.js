import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <Link to="/plantrip">
        <Button>Plan a New Trip</Button>
      </Link>
      <Link to="/seetrips">
        <Button>See Planned Trips</Button>
      </Link>
    </div>
  );
};

export default HomePage;
