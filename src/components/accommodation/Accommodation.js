import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './accommodation.scss';
import { fetchAccommodations } from '../../redux/actions/accommodation';
import like from '../../assets/images/like.svg';

class Accommodations extends Component {
  componentDidMount() {
    this.props.fetchAccommodations();
  }

  render() {
    return (
      <div>
        <div className="batonizi">
        <Link to='/AccommodationCreate'><button className='btn btn--primary' > + Create </button></Link>
      </div>
      {this.props.accommodations.map(({
        id, name, description, images, rooms, likes
      }, index) => (
        <div className="infoCard2">
          <div className="photos">
            <Link to={`/accommodation/${id}`}>
              <img src={images} className="images" alt="user Icon"/>
            </Link>
          </div>
          <div className="details" >
            <div className="info">
            <div className="moreInfo">
              {name && <b><span>{name}</span></b>}
              </div>
              <div className="moreInfo">
              {description && <span>{description}</span>}
              </div>
              <div className="moreInfo">
              {rooms && <span>Rooms: {rooms.length}</span>}
              </div>
              <div className="moreInfo">
              {likes && <span><img src={like} alt="" className="like" /> {likes.length}</span>}
              </div>
          </div>
          </div>

          {this.props.error && <span className='error'>{this.props.error}</span>}
        </div>
      ))}
      </div>
    );
  }
}

const mapStateToProps = ({ accommodation }) => ({
  accommodations: accommodation.accommodations,
  error: accommodation.fetchError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAccommodations: () => dispatch(fetchAccommodations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Accommodations);
