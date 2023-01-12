import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
