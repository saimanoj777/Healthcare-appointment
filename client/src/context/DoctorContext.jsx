import { createContext, useState, useEffect } from 'react';
   import axios from 'axios';

   export const DoctorContext = createContext();

   export const DoctorProvider = ({ children }) => {
     const [doctors, setDoctors] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
       axios.get('http://localhost:5000/api/doctors').then((response) => {
         setDoctors(response.data);
         setLoading(false);
       });
     }, []);

     return (
       <DoctorContext.Provider value={{ doctors, loading }}>
         {children}
       </DoctorContext.Provider>
     );
   };