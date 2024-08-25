import React, { useState } from 'react';

const ForgetPassword = () => {
  // State variables
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(2); // Start from Step 2 (Reset Password)
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      // Replace '/api/reset-password' with your actual API endpoint
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setMessage('Your password has been reset successfully.');
          setStep(3);
        } else {
          setError(data.message || 'Password reset failed.');
        }
      } else {
        setError('Failed to reset password. Please try again later.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {step === 2 && 'Reset Password'}
          {step === 3 && 'Success'}
        </h2>

        {/* Step 2: Password Reset */}
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

            {/* Display Error Message */}
            {error && (
              <p className="text-red-600 text-sm mb-4">{error}</p>
            )}

            {/* Display Success Message */}
            {message && (
              <p className="text-green-600 text-sm mb-4">{message}</p>
            )}

            {/* Submit Button */}
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

        {/* Step 3: Success Message */}
        {step === 3 && (
          <div>
            <p className="text-green-600 text-sm mb-4">
              Your password has been reset successfully.
            </p>
            <button
              onClick={() => setStep(2)}
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

export default ForgetPassword;
