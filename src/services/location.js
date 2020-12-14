import axios from 'axios';

class Locations {
  retrieveLocations() {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token')
      }
    };
    const response = axios.get('/api/locations',);
    return response;
  }
}

export default new Locations();