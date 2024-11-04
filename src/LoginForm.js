import React, { useState } from 'react';
import SuccessModal from './SuccessModel'; 
import ForgotPassword from './ForgotPassword'; 

function LoginForm({ setShowSignup }) {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [resetMessage, setResetMessage] = useState(null); // State to hold reset message

  const handleLogin = (event) => {
    event.preventDefault();
    setShowModal(true); 
    setUsername('');
    setPassword('');
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true); 
  };

  // Function to handle going back to login form
  const handleBackToLogin = () => {
    setShowForgotPassword(false); // Show the login form
    setResetMessage(null); // Clear the reset message when going back
  };

  // This function will be called when the reset link is sent
  const handleResetLinkSent = (message) => {
    setShowForgotPassword(false); // Go back to the login form
    setResetMessage(message); // Store the success message
  };

  return (
    <>
      {!showForgotPassword ? (
        <div className="form-container">
          <h2 className="form-title">Welcome!</h2>
          <p className="form-subtitle">Sign in to your account</p>

          {resetMessage && (
            <div className="message success"> {/* Display success message here */}
              <p>{resetMessage}</p>
            </div>
          )}

          <form className="form-body" onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-input"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="form-input"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-footer">
              <div>
                <input type="checkbox" id="remember" className="form-checkbox" />
                <label htmlFor="remember" className="form-label">Remember me?</label>
              </div>
              <a href="#" className="form-link" onClick={handleForgotPassword}>
                Forgot password?
              </a>
            </div>
            <button type="submit" className="form-button">Login</button>
          </form>
          <p className="form-switch">
            Don't have an account?{' '}
            <span
              onClick={() => setShowSignup(true)}
              className="form-link-switch"
            >
              Create one
            </span>
          </p>
        </div>
      ) : (
        <ForgotPassword onBack={handleBackToLogin} onResetLinkSent={handleResetLinkSent} />
      )}
      <SuccessModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default LoginForm;
