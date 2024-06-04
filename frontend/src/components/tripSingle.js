import React from "react";
import { Link } from "react-router-dom";
import { GrEdit, GrTrash } from "react-icons/gr";
import { Button } from "react-bootstrap";


const tripSingle = ({ destination, onDelete }) => {

  

  return (
    <tr>
      <td>{destination.origin}</td>
      <td>{destination.destination}</td>
      <td>{destination.startDate.slice(0, 10)}</td>
      <td>{destination.endDate.slice(0, 10)}</td>
      <td>
        <Link to={`/edittrip/${destination._id}`}>
          <GrEdit />
        </Link>
      </td>
      <td>
        {" "}
        <GrTrash onClick={() => onDelete(destination._id)} />
      </td>
      <td><Link to={`/tripdetails/${destination._id}`}>See Details</Link></td>
    </tr>
  );
};

export default tripSingle;
