import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'http://localhost:3333';

export {getUserData}

function getUserData() {
  const url = `${BASE_URL}/api/user/data`;
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}`}}).then(response => response.data);
}
