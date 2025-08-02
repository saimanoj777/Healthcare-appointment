import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import API_CONFIG from '../config/api';

export const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.doctors}`);
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <DoctorContext.Provider value={{ doctors, loading }}>
      {children}
    </DoctorContext.Provider>
  );
};