import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ForgetPass = () => {
  // State variables
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // Steps: 1 - Verify Email, 2 - Reset Password, 3 - Success
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Function to handle email verification
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('http://localhost:8000/api/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.isValid) {
          setMessage('Email verified. Please enter your new password.');
          toast.success('Email verified. Please enter your new password.');
          setStep(2);
        } else {
          toast.error('Email address not found.');
          setError('Email address not found.');
        }
      } else {
        setError('Failed to verify email. Please try again later.');
        toast.error('Failed to verify email. Please try again later.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle password reset
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/resetPassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email, // Sending the verified email
          newPassword: newPassword,
          newPassword_confirmation: confirmPassword
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setMessage('Your password has been reset successfully.');
          toast.success('Your password has been reset successfully.');
          setStep(3);
        } else {
          setError(data.message || 'Password reset failed.');
          toast.error(data.message || 'Password reset failed.');
        }
      } else {
        setError('Failed to reset password. Please try again later.');
        toast.error('Failed to reset password. Please try again later.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {step === 1 && 'Forgot Password'}
          {step === 2 && 'Reset Password'}
          {step === 3 && 'Success'}
        </h2>

        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm mb-4">{error}</p>
            )}

            {message && (
              <p className="text-green-600 text-sm mb-4">{message}</p>
            )}

            <button
              type="submit"
              className={`w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify Email'}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter new password"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Confirm new password"
                required
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm mb-4">{error}</p>
            )}

            {message && (
              <p className="text-green-600 text-sm mb-4">{message}</p>
            )}

            <button
              type="submit"
              className={`w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}

        {step === 3 && (
          <div>
            <p className="text-green-600 text-sm mb-4">
              Your password has been reset successfully.
            </p>
            <button
              onClick={() => navigate('/login')}
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Go Back to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgetPass;
