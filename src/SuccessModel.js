import React from 'react';
import './SuccessModal.css'; // Make sure to create a CSS file for styling

function SuccessModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <span className="check-icon">✅</span>
        </div>
        <h2>Account created successfully!</h2>
        <p>Congratulations! Your account has been created. Please log in with your credentials to get started.</p>
        <button className="modal-button" onClick={onClose}>Login to get started</button>
      </div>
    </div>
  );
}

export default SuccessModal;