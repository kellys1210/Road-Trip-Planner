import React from "react";
import TripSingle from "./tripSingle.js";

const TripList = ({trips, onDelete, onEdit}) => {
  return (
    <table id="tripList">
      <caption>Trips</caption>
      <thead>
        <tr>
          <th>Destination</th>
          <th>Start Date</th>
          <th>Arrival Date</th>
        </tr>
      </thead>
      <tbody>
        {trips.map((trip, i) => (
          <TripSingle
            trip={trip}
            key={i}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TripList;
