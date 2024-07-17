import React from 'react';

const ProfileEdit = () => {
  return (
    <section className=' max-h-full w-full'>
    <div className="max-w-xl mx-auto mt-72 p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-red-600">Edit Your Profile</h2>
      <form action=''>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">First Name</label>
            <input type="text" placeholder='First name'
            className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Last Name</label>
            <input type="text" placeholder='Last name'
            className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" placeholder='email'

            className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Address</label>
            <input type="text"  placeholder='Address'
            className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Password Changes</h3>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
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
