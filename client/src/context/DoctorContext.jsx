import { createContext, useState, useEffect } from 'react';
import { getAllDoctors } from '../data/doctors';

export const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for better UX
    const loadDoctors = () => {
      setTimeout(() => {
        setDoctors(getAllDoctors());
        setLoading(false);
      }, 500);
    };

    loadDoctors();
  }, []);

  return (
    <DoctorContext.Provider value={{ doctors, loading }}>
      {children}
    </DoctorContext.Provider>
  );
};