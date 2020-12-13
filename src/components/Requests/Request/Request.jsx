import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import './Request.scss';

const Request = ({
  reqNumber,
  role,
  reqInfo: {
    id,
    departure,
    destination,
    travel_date,
    return_date,
    travel_reason,
    place_to_stay,
    request_status,
    requester,
  },
}) => {
  const statusClass = request_status === 'pending' ? 'pending' : 'approved';

  let requesterField = '';

  if (role === 'manager') requesterField = <li>{requester.firstName}</li>;

  return (
    <div className="Request">
      <ul>
        <li>{reqNumber + 1}</li>
        {requesterField}
        <li>{departure.city}</li>
        <li>{destination.city}</li>
        <li>{travel_date.split('T')[0]}</li>
        <li>{return_date.split('T')[0]}</li>
        <li>{travel_reason}</li>
        <li>{place_to_stay.name}</li>
        <li className={statusClass}>{request_status}</li>
        {request_status === 'pending' ? (
          <li>
            <Link to={`/requests/${id}`} className="btn-edit">
              Edit
            </Link>
          </li>
        ) : (
          <li>
            <a href="#" className="btn-edit disabled" disabled>
              Edit
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Request;
