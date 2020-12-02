/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import InputField from '../common/InputField';
import Button from '../common/Button';
import './accommodation.scss';
import { createAccommodations } from '../../redux/actions/accommodationCreate';
import { fetchLocations } from '../../redux/actions/location';

class AccommodationCreate extends Component {
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
    this.getOptions();
    if (this.props.message) {
      this.props.history.push('/accommodations');
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
    const label = [];
    for (let i = 0; i < e.length; i += 1) {
      label.push(e[i].label);
    }
    this.setState({ facilities: label });
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
    const { creatingAccommodation } = this.props;
    creatingAccommodation(data);
  }

  render() {
    const error = this.props.error;
    const {
      name, description, longitude, latitude, photo, facilities, locationId
    } = this.state;
    return (
          <div className='contents'>
            <div className='mmmm'>
            <h3> <b> Create a new accommodation </b></h3>
            {this.props.message && <h4>{this.props.message}</h4>}
            {this.props.error && <h5>{this.props.error}</h5>}
            <form action='#' onSubmit={this.onSubmit}>
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Name'
            className='form-control'
            name='name'
            value={name}
            />
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Description'
            className='form-control'
            name='description'
            value={description}
            />
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Longitude'
            className='form-control'
            name='longitude'
            value={longitude}
            />
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Latitude'
            className='form-control'
            name='latitude'
            value={latitude}
            />
            <div className='selec'>
            <select name='locationId' onChange ={this.handleChange} placeholder='Select location' value= {this.state.locationId} className='form-control'>
                {
                  this.props.locations.map((location) => <option value={location.id}>
                    {location.city}
                  </option>

                  ) }
            </select>
            </div>
            <div className='selec'>
            <Select options={this.state.selectOptions} placeholder='Select facilities' onChange={this.handleChange2} isMulti />
           </div>
            <InputField
            type="file"
            label='Image'
            handleChange={this.onFileChange}
            name="photo"
            className="form-control"
            accept=".png, .jpg, .jpeg"
            />
            <Button content='Submit' />
          </form>
          </div>
        </div>
    );
  }
}
const mapStateToProps = ({ accommodation, location, accommodationCreate }) => ({
  accommodations: accommodation.accommodations,
  message: accommodationCreate.message,
  locations: location.locations,
  error: accommodationCreate.error,
});

const mapDispatchToProps = (dispatch) => ({
  creatingAccommodation: (data) => dispatch(createAccommodations(data)),
  fetchLocations: () => dispatch(fetchLocations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccommodationCreate);