import axios from 'axios';

class AuthService {
  login(email, password) {
    const response = axios.post('api/users/signin', { email, password });
    return response;
  }

  async findUserService(email) {
    const response = await axios.post('/api/users/forgotPassword', { email });
    return response.data;
  }
}

export default new AuthService();