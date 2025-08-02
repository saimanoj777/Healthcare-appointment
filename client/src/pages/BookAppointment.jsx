import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import API_CONFIG from '../config/api';
import BookingModal from '../components/BookingModal';

function BookAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    dateTime: '',
  });
  const [doctor, setDoctor] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.doctorById(id)}`);
        setDoctor(response.data);
      } catch (error) {
        console.error('Error fetching doctor:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.patientName) newErrors.patientName = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.dateTime) newErrors.dateTime = 'Date and time are required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    try {
      const response = await axios.post(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.appointments}`, {
        doctorId: id,
        ...formData,
      });
      
      // Set appointment data for modal
      setAppointmentData({
        ...formData,
        appointmentId: response.data.appointment.id
      });
      
      // Show success modal
      setShowModal(true);
      
      // Reset form
      setFormData({
        patientName: '',
        email: '',
        dateTime: '',
      });
      setErrors({});
      
    } catch (error) {
      setErrors({ submit: 'Failed to book appointment. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleModalClose = () => {
    setShowModal(false);
    setAppointmentData(null);
    // Navigate back to doctor profile after modal closes
    navigate(`/doctor/${id}`);
  };

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="loading-spinner mb-3"></div>
          <p className="text-muted">Loading appointment form...</p>
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
          <p className="text-muted">Unable to load doctor information.</p>
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
      <div className="booking-form">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="text-center mb-4">
              <h2 className="mb-3">Book Appointment</h2>
              <div className="d-flex align-items-center justify-content-center mb-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="rounded-circle me-3"
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
                <div className="text-start">
                  <h5 className="mb-1">{doctor.name}</h5>
                  <p className="text-muted mb-0">
                    <i className="fas fa-stethoscope me-2"></i>
                    {doctor.specialization}
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="patientName" className="form-label">
                    <i className="fas fa-user me-2"></i>
                    Patient Name
                  </label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    className={`form-control ${errors.patientName ? 'is-invalid' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.patientName && <div className="text-danger small">{errors.patientName}</div>}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    <i className="fas fa-envelope me-2"></i>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <div className="text-danger small">{errors.email}</div>}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="dateTime" className="form-label">
                  <i className="fas fa-calendar me-2"></i>
                  Preferred Date & Time
                </label>
                <select
                  id="dateTime"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  className={`form-select ${errors.dateTime ? 'is-invalid' : ''}`}
                >
                  <option value="">Select a time slot</option>
                  {doctor.availability.map((slot, index) => (
                    <option key={index} value={slot}>
                      {new Date(slot).toLocaleDateString()} at {new Date(slot).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </option>
                  ))}
                </select>
                {errors.dateTime && <div className="text-danger small">{errors.dateTime}</div>}
              </div>

              {errors.submit && (
                <div className="alert alert-danger" role="alert">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  {errors.submit}
                </div>
              )}

              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <div className="loading-spinner me-2"></div>
                      Booking...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-calendar-check me-2"></i>
                      Book Appointment
                    </>
                  )}
                </button>
                <Link to={`/doctor/${doctor.id}`} className="btn btn-outline-secondary">
                  <i className="fas fa-arrow-left me-2"></i>
                  Back to Profile
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      <BookingModal
        isOpen={showModal}
        onClose={handleModalClose}
        appointmentData={appointmentData}
        doctorName={doctor.name}
      />
    </div>
  );
}

export default BookAppointment;