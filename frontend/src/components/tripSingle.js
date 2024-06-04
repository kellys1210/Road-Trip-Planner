import React from "react";
import { Link } from "react-router-dom";
import { GrEdit, GrTrash } from "react-icons/gr";

const tripSingle = ({ destination, onDelete }) => {
  const startDate = new Date(destination.startDate);
  const endDate = new Date(destination.endDate);
  const tripLength = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

  return (
    <tr>
      <td>{destination.origin}</td>
      <td>{destination.destination}</td>
      <td>{destination.startDate.slice(0, 10)}</td>
      <td>{destination.endDate.slice(0, 10)}</td>
      <td>{tripLength}</td>
      <td>
        <Link to={`/edittrip/${destination._id}`}>
          <GrEdit />
        </Link>
      </td>
      <td>
        {" "}
        <GrTrash onClick={() => onDelete(destination._id)} />
      </td>
    </tr>
  );
};

export default tripSingle;
