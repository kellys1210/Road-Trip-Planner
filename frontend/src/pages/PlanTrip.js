import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PlanTrip = () => {
  return (
    <div>
      <Link to="/seetrips">
        <Button className="tripButton">See Planned Trips</Button>
      </Link>
    </div>
  );
};

export default PlanTrip;
