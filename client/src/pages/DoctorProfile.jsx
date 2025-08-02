import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDoctorById } from '../data/doctors';

function DoctorProfile() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for better UX
    const loadDoctor = () => {
      setTimeout(() => {
        const doctorData = getDoctorById(id);
        setDoctor(doctorData);
        setLoading(false);
      }, 300);
    };

    loadDoctor();
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="loading-spinner mb-3"></div>
          <p className="text-muted">Loading doctor profile...</p>
        </div>
      </div>
    );
  }
  
  if (!doctor) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="mb-3">
            <i className="fas fa-exclamation-triangle text-warning" style={{ fontSize: '3rem' }}></i>
          </div>
          <h4 className="text-muted">Doctor not found</h4>
          <p className="text-muted">The doctor you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">
            <i className="fas fa-arrow-left me-2"></i>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="profile-container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div className="avatar-container">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="doctor-avatar"
                style={{ width: '180px', height: '180px' }}
              />
            </div>
          </div>
          <div className="col-md-8">
            <h2 className="mb-2">{doctor.name}</h2>
            <p className="text-muted mb-3">
              <i className="fas fa-stethoscope me-2"></i>
              {doctor.specialization}
            </p>
            
            {doctor.experience && (
              <p className="text-muted mb-2">
                <i className="fas fa-clock me-2"></i>
                {doctor.experience} of experience
              </p>
            )}
            
            {doctor.rating && (
              <div className="mb-3">
                <div className="d-flex align-items-center">
                  <div className="star-rating me-2">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`fas fa-star ${i < Math.floor(doctor.rating) ? '' : 'text-muted'}`}
                        style={{ fontSize: '1.2rem' }}
                      ></i>
                    ))}
                  </div>
                  <span className="text-muted">
                    {doctor.rating} rating
                  </span>
                </div>
              </div>
            )}
            
            <div className="mb-4">
              <span className={`availability-badge ${doctor.availability.length > 0 ? 'available' : 'unavailable'}`}>
                <i className={`fas ${doctor.availability.length > 0 ? 'fa-check' : 'fa-times'} me-2`}></i>
                {doctor.availability.length > 0 ? 'Available for Appointments' : 'Currently Unavailable'}
              </span>
            </div>

            <div className="d-flex flex-wrap gap-2">
              <Link to={`/book/${doctor.id}`} className="btn btn-primary">
                <i className="fas fa-calendar-plus me-2"></i>
                Book Appointment
              </Link>
              <Link to="/" className="btn btn-outline-secondary">
                <i className="fas fa-arrow-left me-2"></i>
                Back to Doctors
              </Link>
            </div>
          </div>
        </div>

        {doctor.availability.length > 0 && (
          <div className="mt-5">
            <h4 className="mb-3">
              <i className="fas fa-clock me-2"></i>
              Available Time Slots
            </h4>
            <div className="availability-list">
              <div className="row">
                {doctor.availability.map((slot, index) => (
                  <div key={index} className="col-md-6 col-lg-4 mb-3">
                    <div className="list-group-item text-center">
                      <i className="fas fa-calendar-day me-2 text-primary"></i>
                      {new Date(slot).toLocaleDateString()}
                      <br />
                      <small className="text-muted">
                        {new Date(slot).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DoctorProfile;