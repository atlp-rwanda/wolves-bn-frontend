import axios from 'axios';

class RoleService {
  changingRoles(email, role) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token')
      }
    };
    const response = axios.patch('/api/users/settings', { email, role }, config);
    return response;
  }
}

export default new RoleService();
