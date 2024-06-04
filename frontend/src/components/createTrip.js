import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateTrip = () => {
  const navigate = useNavigate();

  const [trip, setTrip] = useState({
    origin: "",
    destination: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event) => {
    setTrip({ ...trip, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/plantrip", {
        method: "POST",
        body: JSON.stringify(trip),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create trip");
      }

      alert("Trip created successfully");
      navigate("/seetrips");
    } catch (error) {
      console.error("Error creating trip:", error);
    }
  };

  return (
    <div>
      <h1>Create a New Trip</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="origin">
      </Form.Group>
          <Form.Label>Origin</Form.Label>
          <Form.Control
            type="text"
            name="origin"
            value={trip.origin}
            onChange={handleChange}
            required
            placeholder="Ex. Denver, CO"
          />
        <Form.Group controlId="destination">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            type="text"
            name="destination"
            value={trip.destination}
            onChange={handleChange}
            required
            placeholder="Ex. Philadelphia, PA"
          />
        </Form.Group>
        <Form.Group controlId="startDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={trip.startDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="endDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={trip.endDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button className="tripButton" type="submit">Create Trip</Button>
      </Form>
    </div>
  );
};

export default CreateTrip;

