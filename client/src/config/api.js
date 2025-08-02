// API Configuration for Deployed API
const API_CONFIG = {
  // Deployed API URL
  baseURL: 'https://my-backend-service-s085.onrender.com',
  
  // API endpoints
  endpoints: {
    doctors: '/api/doctors',
    doctorById: (id) => `/api/doctors/${id}`,
    appointments: '/api/appointments'
  }
};

export default API_CONFIG; 