/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './accommodation.scss';
import { fetchAccommodation } from '../../redux/actions/accommodation';

class Accommodation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ id });
    this.props.fetchAccommodation(id);
  }

  render() {
    const {
      longitude, latitude, facilities, rooms, images
    } = this.props.accommodations;

    return (
    <div>
      <div className="batonizi">
        <Link to='/AccommodationUpdate'><button className='btn btn--primary' > Update </button></Link>
      </div>
        <div className="infoCard3">
            <div className="details2" >
            <div className="photos">
              <img src={images} className="images" alt="user Icon"/>
            </div>
              <div className="moreInfo">
              {longitude && <span>Longitude: {longitude}</span>}
              </div>
              <div className="moreInfo">
              {latitude && <span>Latitude: {latitude}</span>}
              </div>
              <div className="moreInfo">
              {facilities && <span>Facilities: {facilities}</span>}
              </div>
            </div>
            <div className="rooms">
              {rooms && rooms.map(({
                price, type, images
              }, id) => (
                <div className="roomsInfo">
                  <div className="moreInfo">Room No: {id}</div>
                  {<img src={images.replace(/["{}]/g, '')} className="images" alt="user Icon"/>}
                  <div className="moreInfo">{type}</div>
                  <div className="moreInfo">Price: ${price} </div>
                </div>
              ))}
           </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = ({ accommodation }) => ({
  accommodations: accommodation.accommodations,
  error: accommodation.fetchError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAccommodation: (id) => dispatch(fetchAccommodation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Accommodation));
