/* eslint-disable max-len */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRequests, autoSearchTripsList, autoSearchTrips_Destination } from '../../redux/actions/requests/requests';
import Button from '../common/Button/Button.jsx';
import RequestsTable from './Requests-Table.jsx';
import './Requests.scss';

class Requests extends Component {
  componentDidMount() {
    this.props.fetchRequests();
  }

  constructor(props) {
    super(props);
    this.state = {
      departure: '',
      destination: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDisplayorHide = this.handleDisplayorHide.bind(this);
  }

  handleDisplayorHide=(e) => {
    this.setState({
      value: e.target.value
    });
  }

  handleChange=event => {
    // console.log('======', event.target.name, '=', event.target.value);
    if (event.target.name === 'departure') {
      this.props.searchTrip(event.target.value);
    } else if (event.target.name === 'destination') {
      this.props.searchTripsByDestination(event.target.value);
    } else if (event.target.name === 'search') {
      alert('Please select option for searching');
    }
  }

  render() {
    const {
      requests, loading, role, message, error
    } = this.props;

    return (
      <div className="requests">
       <form >
    <select className="select" name="searchby" onChange={this.handleDisplayorHide}>
  <option value="select" >Search By</option>
  <option value="departure" >departure</option>
  <option value="destination" >destination</option>
</select>
<div>
    {this.state.value === 'departure' ? <div><input type='text' placeholder='Search by departure'
    name='departure' onChange={this.handleChange} /></div> : <div><input type="text" placeholder='Search by destination' name="destination" onChange={this.handleChange} /></div> }
  </div>
</form>
        <div className="requests__header">
          <h1 className="title">My Trips Requests</h1>
          {/* { message ? <h3 className='message'>{ message} </h3> : <h3 className="message">{error} </h3>} */}
          {/* { error ? <h3 className='error'>{ error} </h3> : <h3 className="message"> </h3>} */}
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
  trip: requests.trips,
  error: requests.error,
  message: requests.message
});
const mapDispatchToProps = (dispatch) => ({
  fetchRequests: () => dispatch(fetchRequests()),
  searchTrip: (departure) => dispatch(autoSearchTripsList(departure)),
  searchTripsByDestination: (destination) => dispatch(autoSearchTrips_Destination(destination))
});

export default connect(mapStateToProps, mapDispatchToProps)(Requests);
