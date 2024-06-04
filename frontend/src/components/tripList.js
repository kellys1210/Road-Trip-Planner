import React from "react";
import TripSingle from "./tripSingle.js";

const tripList = ({ trips, onDelete }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Origin</th>
          <th>Destination</th>
          <th>Departure Date</th>
          <th>Arrival Date</th>
          <th>Trip Length</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {trips.map((destination, i) => (
          <TripSingle destination={destination} key={i} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default tripList;
