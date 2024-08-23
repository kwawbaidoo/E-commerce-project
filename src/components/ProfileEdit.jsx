import React, { useState, useEffect } from 'react';

const ProfileEdit = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const apiUrl = 'http://localhost:8000/api/getUsers';

  const fetchProfileData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authentication token found');

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Failed to fetch profile data');

      const data = await response.json();

      // Debug: Log the fetched data
      console.log('Fetched profile data:', data);

      // Update the state with fetched data
      setProfileData({
        name: data.name || '',
        email: data.email || '',
        address: data.address || '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      });
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const profileImage = document.getElementById("profileImage");
    const signUp = document.getElementById("signUp");
    let userInitials = document.getElementById("userInitials");

    if (storedUser) {
      profileImage.style.display = "flex";
      signUp.style.display = "none";
      const initials = getUserInitials(storedUser);
      userInitials.innerText= initials;
    }
  }, []);

  function getUserInitials(fullName) {
    if (!fullName) {
      return "";
    }
    const nameParts = fullName.split(" ");

    const initials = nameParts
      .map((word) => word.charAt(0).toUpperCase())
      .join("");

    return initials;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:8000/api/user', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: profileData.name,
          email: profileData.email,
          address: profileData.address,
          ...(profileData.currentPassword && { currentPassword: profileData.currentPassword }),
          ...(profileData.newPassword && { newPassword: profileData.newPassword }),
          ...(profileData.confirmNewPassword && { confirmNewPassword: profileData.confirmNewPassword }),
        }),
      });

      if (!response.ok) throw new Error('Failed to update profile');

      const result = await response.json();
      console.log('Profile updated successfully:', result);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <section className='max-h-full w-full'>
      <div className="max-w-xl mx-auto mt-72 p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-red-600">Edit Your Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profileData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={profileData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Password Changes</h3>
            <div className="mb-4">
              <input
                type="password"
                name="currentPassword"
                value={profileData.currentPassword}
                onChange={handleChange}
                placeholder="Current Password"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="newPassword"
                value={profileData.newPassword}
                onChange={handleChange}
                placeholder="New Password"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="confirmNewPassword"
                value={profileData.confirmNewPassword}
                onChange={handleChange}
                placeholder="Confirm New Password"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="py-2 px-4 bg-gray-300 text-gray-700 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-red-600 text-white rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProfileEdit;
