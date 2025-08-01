import React from 'react';

function BookingModal({ isOpen, onClose, appointmentData, doctorName }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="success-icon m-3">
            <i className="fas fa-check-circle"></i>
          </div>
          <h3 className="modal-title mr-3">Appointment Booked Successfully!</h3>
          <button className="modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="modal-body">
          <div className="appointment-details">
            <div className="detail-row">
              <span className="detail-label">
                <i className="fas fa-user-md me-2"></i>
                Doctor:
              </span>
              <span className="detail-value">{doctorName}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">
                <i className="fas fa-user me-2"></i>
                Patient:
              </span>
              <span className="detail-value">{appointmentData.patientName}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">
                <i className="fas fa-envelope me-2"></i>
                Email:
              </span>
              <span className="detail-value">{appointmentData.email}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">
                <i className="fas fa-calendar me-2"></i>
                Date & Time:
              </span>
              <span className="detail-value">
                {new Date(appointmentData.dateTime).toLocaleDateString()} at{' '}
                {new Date(appointmentData.dateTime).toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            </div>
          </div>
          
          <div className="confirmation-message m-3">
            <p>
              <i className="fas fa-info-circle me-2"></i>
              You will receive a confirmation email shortly. Please arrive 10 minutes before your appointment.
            </p>
          </div>
        </div>
        
        <div className="modal-footer m-3">
          <button className="btn btn-primary" onClick={onClose}>
            <i className="fas fa-check me-2"></i>
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingModal; 