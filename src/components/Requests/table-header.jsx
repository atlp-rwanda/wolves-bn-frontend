import React from 'react';
import './Requests.scss';

const THeader = ({ role }) => (
  <div className="requests__table--header">
    <ul >
      <li className="headers">Index</li>
      {role === 'manager' && <li>Requester</li>}
      <li className="headers">Origin</li>
      <li className="headers">Destination</li>
      <li className="headers">Travel Date</li>
      <li className="headers">Return Date</li>
      <li className="headers">Reason</li>
      {/* <li>Accommodation</li>
      <li className="headers">Status</li> */}
    </ul>
  </div>
);

export default THeader;
