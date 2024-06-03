import React, { useState, useEffect } from "react";
// import { GrAdd, GrEdit, GrTrash } from "react-icons/gr";
import TripList from "../components/tripList.js";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";

function SeeTrips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch("http://localhost:5000/plantrip");
        if (!response.ok) {
          throw new Error("Failed to fetch trips");
        }
        const tripsData = await response.json();
        setTrips(tripsData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Planned Trips</h2>
      {trips.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Destination</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => (
              <tr key={trip._id}>
                <td>{trip.destination}</td>
                <td>{new Date(trip.startDate).toLocaleDateString()}</td>
                <td>{new Date(trip.endDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div>No trips found</div>
      )}
    </div>
  );
}

export default SeeTrips;
