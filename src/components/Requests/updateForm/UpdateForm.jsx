import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../../../redux/actions/locations/locations';
import { fetchRequest } from '../../../redux/actions/requests/Edit/editRequest';
import Input from '../../common/Inputs/Input';
import Select from '../../common/Select/Select';
import '../CreateForm/RequestForm.scss';

class UpdateForm extends Component {
  state = {
    travel_date: '',
    return_date: '',
    travel_reason: '',
    departure: '',
    destination: '',
    accommodation: '',
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    // this.props.fetchLocations();
    this.props.fetchRequest(id);
    console.log(id);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchAccommodations = (locations) => {
    const destinationInfo = locations.filter(
      (i) => i.id === Number(this.state.destination)
    );

    let accommodations;

    if (destinationInfo[0]) {
      accommodations = destinationInfo[0].accomodations;
    } else {
      accommodations = [
        { id: 1, name: 'serena hotel' },
        { id: 2, name: 'verda' },
      ];
    }

    return accommodations;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      travel_date,
      travel_reason,
      return_date,
      destination,
      departure,
      accommodation,
    } = this.state;

    const data = {
      from: departure,
      to: destination,
      travel_date,
      return_date,
      travel_reason,
      accommodation,
    };

    this.props.createTripRequest(data);

    console.log(
      travel_date,
      travel_reason,
      return_date,
      destination,
      departure,
      accommodation
    );
  };

  render() {
    const { info } = this.props;

    console.log(info);

    const {
      travel_date,
      travel_reason,
      return_date,
      destination,
      departure,
      accommodation,
    } = this.state;

    // let accommodations = this.searchAccommodations(locations);

    // if (accommodations.length <= 0) {
    //   accommodations = [{ id: 1, name: 'serena Hotel' }, { id: 2, name: 'verda Hotel' }];
    // }

    const accommodations = [
      { id: 1, name: 'serena Hotel' },
      { id: 2, name: 'verda Hotel' },
    ];

    const locations = [
      { id: 1, city: 'kigali' },
      { id: 2, city: 'kampala' },
      { id: 3, city: 'lagos' },
    ];

    return (
      <div className="RequestForm">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Edit Request
        </h2>

        <form action="#" className="form" onSubmit={this.handleSubmit}>
          {this.props.error && (
            <div
              style={{
                textAlign: 'center',
                margin: '20px 0',
                color: '#DB4437',
              }}
            >
              {this.props.error}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="departure">Pick departure city</label>
            <Select
              name="departure"
              value={departure}
              options={locations}
              handleChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="destination">Pick destination city</label>
            <Select
              name="destination"
              value={destination}
              options={locations}
              handleChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="travel_date">Travel Date</label>
            <Input
              type="date"
              className="form-control"
              value={travel_date}
              handleChange={this.handleChange}
              name="travel_date"
            />
          </div>

          <div className="form-group">
            <label htmlFor="return_date">Return Date</label>
            <Input
              type="date"
              className="form-control"
              value={return_date}
              handleChange={this.handleChange}
              name="return_date"
            />
          </div>

          <div className="form-group">
            <label htmlFor="travel_reason">Travel reason</label>
            <Input
              type="text"
              className="form-control"
              value={travel_reason}
              handleChange={this.handleChange}
              name="travel_reason"
            />
          </div>

          <div className="form-group">
            <label htmlFor="accommodation">Pick an accommodation</label>
            <Select
              name="accommodation"
              value={accommodation}
              options={accommodations}
              handleChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ requests }) => ({
  error: requests.fetchError,
  info: requests.trip,
});

const mapDispatchToProps = (dispatch) => ({
  fetchLocations: () => dispatch(fetchLocations()),
  fetchRequest: (id) => dispatch(fetchRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);