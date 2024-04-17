// apiMiddleware.js
import axios from 'axios';
import { addBandset } from './features/authSlice';  

// Create a function to set the JWT token in the axios instance
const setAuthorizationHeader = (token) => { 
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Middleware to intercept API requests
export const apiMiddleware = () => (next) => async (action) => {
  if (action.type === addBandset.token) {
    // When the token is set, update the axios instance with the new token
    setAuthorizationHeader(action.payload);
  }

  return next(action);
};

// Export your API instance for use in your application
const api = axios.create({
  baseURL: 'festival-backend-4mztc7xe6-muneercrs-projects.vercel.app',
});

export default api;
