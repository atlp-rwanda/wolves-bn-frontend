import React from 'react';
import NavButtons from '../common/Button/NavButtons.jsx';
import Request from './Request/Request.jsx';
import THeader from './table-header.jsx';
import Spinner from '../common/Spinner/Spinner';

const RequestsTable = ({ requests, role, loading }) => {
  let trips = <h1 className="error">No data found</h1>;
  if (requests.length > 0) {
    trips = (
      <React.Fragment>
        <div className="requests__table--body">
          {requests.map((req, index) => (
            <Request key={index} reqInfo={req} reqNumber={index} role={role} />
          ))}
        </div>
        <NavButtons />
      </React.Fragment>
    );
  }

  if (loading) trips = <Spinner />;

  return (
    <div className="requests__table">
      <THeader role={role} />
      {trips}
    </div>
  );
};

export default RequestsTable;
