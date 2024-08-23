import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    toast.success("Logout successfull");
    window.location.href = '/login';

  };
  
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Home &gt; Dashboard</p>
      </div>
      <div>
        <button onClick={handleLogout} className="bg-gray-200 p-2 rounded">Logout</button>
      </div>
    </div>
  );
};

export default Header;
