'use client'
import React, { useState } from 'react';
import ToLogin from './ToLogin';
import ToSignup from './ToSignup';

function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className='grid-flow-col'>
      <div className='grid-cols-1'>
        {showLogin ? <ToLogin /> : <ToSignup />}
      </div>
      <div>
        <button onClick={toggleShowLogin}>
          {showLogin ? 'Sign Up' : 'Log In'}
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
