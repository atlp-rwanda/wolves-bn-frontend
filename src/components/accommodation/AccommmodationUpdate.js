/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import axios from 'axios';
import InputField from '../common/InputField';
import Button from '../common/Button';
import './accommodation.scss';
import { updateAccommodations } from '../../redux/actions/accommodationCreate';
import { fetchLocations } from '../../redux/actions/location';
import { fetchAccommodation } from '../../redux/actions/accommodation';

class AccommodationUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        description: '',
        longitude: '',
        latitude: '',
        photo: '',
        facilities: [],
        locationId: '',
      },
      message: '',
      selectOptions: [],
      value: []
    };
    this.onChange = this.onChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleFacilities = this.handleFacilities.bind(this);
  }

  async getOptions() {
    const ourData = [
      { value: 1, label: 'Gym' },
      { value: 2, label: 'Swimming pool' },
      { value: 3, label: 'Internet' },
      { value: 4, label: 'Spa' }
    ];

    const options = ourData.map(d => ({
      value: d.value,
      label: d.label

    }));

    this.setState({ selectOptions: options });
  }

  componentDidMount() {
    this.props.fetchLocations();
    console.log(this.props.fetchAccommodation());
    this.getOptions();
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.accommodation);
    console.log('nextProps.res', nextProps.meassage);
    console.log('nextProps', nextProps);
    if (nextProps.message) {
      this.props.history.push('/profile');
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log('values:', e.target.value);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log('values:', e.target.value);
  };

  handleFacilities = (v) => {
    this.setState({ value: v.label });
  };

  handleChange2(e) {
    console.log('e=====', e);
    this.setState({ value: e });
  }

  onFileChange(e) {
    this.setState({ [e.target.name]: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();
    const data = {
      name: this.state.name,
      description: this.state.description,
      longitude: this.state.longitude,
      latitude: this.state.latitude,
      photo: this.state.photo,
      facilities: this.state.facilities,
      locationId: this.state.locationId,
    };
    const { updatingAccommodation } = this.props;
    updatingAccommodation(data);
  }

  render() {
    const error = this.props.error;
    const {
      name, description, longitude, latitude, photo, facilities, locationId
    } = this.state;
    return (
          <div className='contents'>
            <div className='mmmm'>
            <h3> <b> UPdate your accommodation </b></h3>
            {this.props.message && <h4>{this.props.message}</h4>}
            <form action='#' onSubmit={this.onSubmit}>
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Name'
            className='form-control'
            name='name'
            value={name}
            />
            {this.props.error && <h5>{ error.includes('name') ? error : ''}</h5>}
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Description'
            className='form-control'
            name='description'
            value={description}
            />
            {this.props.error && <h5>{ error.includes('description') ? error : ''} </h5>}
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Longitude'
            className='form-control'
            name='longitude'
            value={longitude}
            />
            {this.props.error && <h5>{ error.includes('longitude') ? error : ''} </h5>}
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Latitude'
            className='form-control'
            name='latitude'
            value={latitude}
            />
            {this.props.error && <h5>{ error.includes('latitude') ? error : ''} </h5>}
            <div className='selec'>
            <select name='locationId' placeholder="Select Option" onChange ={this.handleChange} value= {this.state.value} className='form-control'>
                {
                  this.props.locations.map((location) => <option value={location.id}>
                    {location.city}
                  </option>

                  ) }
            </select>
            </div>
            <div className='selec'>
            <Select options={this.state.selectOptions} placeholder='Select facilities' onChange={this.handleChange2.bind(this)} isMulti />
           </div>
            <InputField
            type="file"
            label='Image'
            handleChange={this.onFileChange}
            name="photo"
            className="form-control"
            accept=".png, .jpg, .jpeg"
            />
            {this.props.error && <h5>{error.includes('photo') ? error : ''} </h5>}
            <Button content='Submit' />
          </form>
          </div>
        </div>
    );
  }
}
const mapStateToProps = ({ accommodation, location, accommodationUpdate }) => ({
  accommodations: accommodation.accommodations,
  locations: location.locations,
  accommodationUpdate: accommodationUpdate.message,
  error: accommodation.error,
});

const mapDispatchToProps = (dispatch) => ({
  updatingAccommodation: (id) => dispatch(updateAccommodations(id)),
  fetchLocations: () => dispatch(fetchLocations()),
  fetchAccommodation: (id) => dispatch(fetchAccommodation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccommodationUpdate);