import React, { useState } from 'react';
import './SignupForm.css';

function SignupForm({ setShowSignup }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleCreateAccount = (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Here you would typically make an API call to create the account
    // For this example, we'll just simulate a successful account creation
    console.log('Creating account with:', { name, email, password });
    alert('Account created successfully!');
    setShowSignup(false);
  };

  return (
    <div className="form">
      <h2>Create account!</h2>
      <form onSubmit={handleCreateAccount}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Create</button>
      </form>
      <p>
        Already have an account?{' '}
        <span
          onClick={() => setShowSignup(false)}
          className="sign-in-link"
        >
          Sign in
        </span>
      </p>
    </div>
  );
}

export default SignupForm;