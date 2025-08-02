// API Configuration for Local Development
const API_CONFIG = {
  // Local development API URL
  baseURL: 'http://localhost:5000',
  
  // API endpoints
  endpoints: {
    doctors: '/api/doctors',
    doctorById: (id) => `/api/doctors/${id}`,
    appointments: '/api/appointments'
  }
};

export default API_CONFIG; 