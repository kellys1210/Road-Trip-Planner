import React from 'react'
import TripSingle from './tripSingle.js'

const tripList = (trips, onDelete, onEdit) => {
  return (
      <table id="trips">
      <caption>List of Trips</caption>
      <thead>
        <tr>
          <th>Destination</th>
          <th>Departure Date</th>
          <th>Arrival Date</th>
        </tr>
      </thead>
      <tbody>
        {trips.map((destination, i) => (
          <TripSingle
            destination={destination}
            key={i}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
}

export default tripList

