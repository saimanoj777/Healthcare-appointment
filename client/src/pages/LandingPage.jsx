import { useState, useContext } from 'react';
import { DoctorContext } from '../context/DoctorContext';
import DoctorCard from '../components/DoctorCard';

function LandingPage() {
  const { doctors, loading } = useContext(DoctorContext);
  const [search, setSearch] = useState('');

  const filteredDoctors = doctors.filter((doctor) => {
    const searchTerm = search.toLowerCase();
    const searchableText = [
      doctor.name,
      doctor.specialization,
      doctor.experience,
      doctor.rating?.toString(),
      // Search in availability dates
      ...doctor.availability.map(slot => new Date(slot).toLocaleDateString())
    ].join(' ').toLowerCase();
    
    return searchableText.includes(searchTerm);
  });

  return (
    <div className="container py-5">
      <div className="page-header">
        <h1>Find Your Perfect Doctor</h1>
        <p>Connect with experienced healthcare professionals for your medical needs</p>
      </div>
      
      <div className="search-container">
        <div className="input-group">
          <span className="input-group-text bg-transparent border-0">
            <i className="fas fa-search text-muted"></i>
          </span>
          <input
            type="text"
            placeholder="Search by name, specialization, experience, or rating..."
            className="form-control border-0 shadow-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {search && (
          <div className="mt-2">
            <small className="text-muted">
              <i className="fas fa-info-circle me-1"></i>
              Showing {filteredDoctors.length} of {doctors.length} doctors
            </small>
          </div>
        )}
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="loading-spinner mb-3"></div>
          <p className="text-muted">Finding the best doctors for you...</p>
        </div>
      ) : (
        <>
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-5">
              <div className="mb-3">
                <i className="fas fa-user-md text-muted" style={{ fontSize: '3rem' }}></i>
              </div>
              <h4 className="text-muted">No doctors found</h4>
              <p className="text-muted">
                {search ? `No doctors match "${search}". Try different keywords.` : 'No doctors available at the moment.'}
              </p>
              {search && (
                <button 
                  className="btn btn-outline-primary mt-2"
                  onClick={() => setSearch('')}
                >
                  <i className="fas fa-times me-2"></i>
                  Clear Search
                </button>
              )}
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="col">
                  <DoctorCard doctor={doctor} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default LandingPage;