import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRequests } from '../../redux/actions/requests/requests';
import Button from '../common/Button/Button.jsx';
import RequestsTable from './Requests-Table.jsx';
import './Requests.scss';

class Requests extends Component {
  componentDidMount() {
    this.props.fetchRequests();
  }

  render() {
    const { requests, loading, role } = this.props;

    return (
      <div className="requests">
        <div className="requests__header">
          <h1 className="title">My Trips Requests</h1>
          <Button value={'+ New Trip'} />
        </div>
        <RequestsTable role={role} requests={requests} loading={loading} />
      </div>
    );
  }
}

const mapStateToProps = ({ requests }) => ({
  requests: requests.tripsRequest,
  loading: requests.loading,
  role: requests.role,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRequests: () => dispatch(fetchRequests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Requests);
