import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const EditTrip = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // State for trip details
  const [trip, setTrip] = useState({
    destination: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const fetchTripDetails = async () => {
      // Fetch trip details from backend using the trip id
      try {
        const response = await axios.get(`http://localhost:5000/plantrip/${id}`);
        setTrip(response.data);
      } catch (error) {
        console.error("Error fetching trip details:", error);
      }
    };

    fetchTripDetails();
  }, [id]);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Logic to update trip details on the backend
    try {
      const response = await axios.put(`http://localhost:5000/plantrip/${id}`, trip, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("Trip updated successfully");
      navigate("/seetrips");
    } catch (error) {
      console.error("Error updating trip details:", error);
    }
  };

  // Function to handle input changes
  const handleChange = (event) => {
    setTrip({ ...trip, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="origin">
          {/* Add your form controls here */}
        </Form.Group>
        <Form.Label>Origin</Form.Label>
        <Form.Control
          type="text"
          name="origin"
          value={trip.origin || ""}
          onChange={handleChange}
          required
        />
        <Form.Group controlId="destination">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            type="text"
            name="destination"
            value={trip.destination || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="startDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={trip.startDate ? trip.startDate.slice(0, 10) : ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="endDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={trip.endDate ? trip.endDate.slice(0, 10) : ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button className="tripButton" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default EditTrip;
