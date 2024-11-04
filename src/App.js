import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="container">
      {showSignup ? (
        <SignupForm setShowSignup={setShowSignup} />
      ) : (
        <LoginForm setShowSignup={setShowSignup} />
      )}
    </div>
  );
}

export default App;