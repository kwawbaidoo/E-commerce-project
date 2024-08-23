import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AccountDropDown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleClickOutside = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    toast.success("Logout successfull");
    window.location.href = '/login';

  };


  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center z-50 modal-overlay">
      <div  className="bg-customgray  rounded-lg shadow-lg p-6 w-52 -top-[150px] left-[480px] relative">
        <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 text-gray-500  modal-overlay">
          &#x2715;
        </button>
        <em className="text-md font-semibold  text-gray-500 ">Profile</em>
        <ul className='flex flex-col mt-4'>

          <Link onClick={onClose} to="/profileEdit" className="mb-2 modal-overlay">
            <button className="text-gray-500 hover:underline flex items-center gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="#DB4444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.899 1.899 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9Z" stroke="#DB4444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                Manage Account</button>
          </Link>
          
          <li className="mb-2">
            <button onClick={onClose} className="text-gray-500 hover:underline flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 6v2.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2c1.09.01 2.09.45 2.81 1.17C21.55 3.9 22 4.9 22 6Z" stroke="#DB4444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 7v14c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2H6C3 2 2 3.79 2 6v1Z" stroke="#DB4444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 13.01h3M9 9.01h3" stroke="#DB4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.996 13h.009M5.996 9h.009" stroke="#DB4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                My Orders</button>
          </li>
          <li className="mb-2 ">
            <button onClick={handleLogout} className="text-gray-500 hover:underline flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#DB4444" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17.44 14.62L20 12.06 17.44 9.5M9.76 12.06h10.17M11.76 20c-4.42 0-8-3-8-8s3.58-8 8-8"></path></svg>
                Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountDropDown;