import axios from 'axios';

class AuthService {
  login(email, password) {
    const response = axios.post('api/users/signin', { email, password });
    return response;
  }

  findUserService(email) {
    const response = axios.post('/api/users/forgotPassword', { email });
    return response;
  }

  resetPassword(newPassword) {
    const tokenParam = window.location.search;
    if (tokenParam.length > 1) {
      const resetLinkToken = tokenParam.split('=')[1];
      const resettingUrl = `api/users/resetPassword/${resetLinkToken}`;
      const response = axios.post(resettingUrl, { newPassword });
      return response;
    }
  }
}

export default new AuthService();
