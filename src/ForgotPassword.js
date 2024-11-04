import React, { useState } from 'react';
import './ForgotPassword.css';

function ForgotPassword({ onResetLinkSent }) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (email) {
        const successMessage = 'Password reset link sent to your email.';
        setMessage({ type: 'success', text: successMessage });

        // Call the prop function to notify the login form with the success message
        if (onResetLinkSent) onResetLinkSent(successMessage); // Send success message to LoginForm
      } else {
        throw new Error('Please enter a valid email.');
      }
    } catch (error) {
      setMessage({ type: 'error', text: error.message || 'An error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2 className="card-title">Forgot Password?</h2>
        <p className="card-description">Enter your email to receive a password reset link.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="loader"></span>
                Sending Reset Link
              </>
            ) : (
              'Send Reset Link'
            )}
          </button>
        </form>
        {message && (
          <div className={`message ${message.type}`}>
            <p>{message.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
