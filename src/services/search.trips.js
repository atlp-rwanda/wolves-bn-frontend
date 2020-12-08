import axios from 'axios';

class SearchTrips {
  getAllTrips() {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token')
      }
    };
    const response = axios.get(`${process.env.REACT_APP_URL}/api/trips`, config);
    return response;
  }

  autoSearchTrip(departure) {
    const token = localStorage.getItem('token');

    const response = axios.get(`${process.env.REACT_APP_URL}/api/trips/search?departure=${departure}`, {
      headers: {
        token,
      },
    });
    return response;
  }

  autoSearchTripByDestination(destination) {
    const token = localStorage.getItem('token');

    const response = axios.get(`${process.env.REACT_APP_URL}/api/trips/search?destination=${destination}`, {
      headers: {
        token,
      },
    }
    );
    return response;
  }
}

export default new SearchTrips();
