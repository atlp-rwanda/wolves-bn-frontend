import React from 'react';
import './Request.scss';

const Request = ({
  id,
  role,
  reqInfo: {
    departure,
    destination,
    travel_date,
    return_date,
    travel_reason,
    // place_to_stay,
    // request_status,
    requester,
  },
}) => {
  // const statusClass = request_status === 'pending' ? 'pending' : 'approved';

  let requesterField = '';

  if (role === 'manager') requesterField = <li>{requester.firstName}</li>;

  return (
    <div className="Request">
      <ul>
        <li>{id + 1}</li>
        {requesterField}
        <li>{departure.city}</li>
        <li>{destination.city}</li>
        <li>{travel_date.split('T')[0]}</li>
        <li>{return_date.split('T')[0]}</li>
        <li>{travel_reason}</li>
        {/* <li>{place_to_stay.name}</li> */}
        {/* <li className={statusClass}>{request_status}</li> */}
      </ul>
    </div>
  );
};

export default Request;
