import React from 'react';

const THeader = ({ role }) => (
  <div className="requests__table--header">
    <ul>
      <li>Index</li>
      {role === 'manager' && <li>Requester</li>}
      <li>Origin</li>
      <li>Destination</li>
      <li>Travel Date</li>
      <li>Return Date</li>
      <li>Reason</li>
      <li>Accommodation</li>
      <li>Status</li>
    </ul>
  </div>
);

export default THeader;
