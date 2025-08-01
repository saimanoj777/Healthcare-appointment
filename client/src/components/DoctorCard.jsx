import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  return (
    <div className="card doctor-card h-100">
      <div className="position-relative">
        <div className="avatar-container">
          <img 
            src={doctor.image} 
            alt={doctor.name} 
            className="doctor-avatar" 
          />
        </div>
        <div className="position-absolute top-0 end-0 m-3">
          <span className={`availability-badge ${doctor.availability.length > 0 ? 'available' : 'unavailable'}`}>
            {doctor.availability.length > 0 ? 'Available' : 'Unavailable'}
          </span>
        </div>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{doctor.name}</h5>
        <p className="card-text text-muted mb-2">
          <i className="fas fa-stethoscope me-2"></i>
          {doctor.specialization}
        </p>
        
        {doctor.experience && (
          <p className="card-text small text-muted mb-2">
            <i className="fas fa-clock me-2"></i>
            {doctor.experience} experience
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
                    style={{ fontSize: '0.875rem' }}
                  ></i>
                ))}
              </div>
              <small className="text-muted">
                {doctor.rating} ({doctor.availability.length} slots available)
              </small>
            </div>
          </div>
        )}
        
        <div className="mt-auto">
          <Link to={`/doctor/${doctor.id}`} className="btn btn-primary w-100">
            <i className="fas fa-user-md me-2"></i>
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;