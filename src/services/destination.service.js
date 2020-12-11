import axios from 'axios';

class Destinations {
  visited() {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token')
      }
    };
    const token = localStorage.getItem('token');
    const response = axios.get('/api/topdestination', config);
    return response;
  }
}

export default new Destinations();