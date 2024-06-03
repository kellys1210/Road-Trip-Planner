import React from 'react'
import { GrEdit, GrTrash } from "react-icons/gr";

const tripSingle = ({destination, onEdit, onDelete}) => {
  return (
    <tr>
    <td>{destination.destination}</td>
    <td>{destination.startDate.slice(0, 10)}</td>
    <td>{destination.endDateslice(0, 10)}</td>


    <td>
      <GrTrash onClick={() => onDelete(destination._id)} />
    </td>
    <td>
      <GrEdit onClick={() => onEdit(destination)} />
    </td>
  </tr>
  )
}

export default tripSingle

