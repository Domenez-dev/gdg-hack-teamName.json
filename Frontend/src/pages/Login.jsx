import React from 'react';
import gdg from "../assets/images/gdg.png";
import logo from "../assets/images/logo.png";
import {Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-white p-8 rounded-2xl  text-center w-96 relative">
        {/* Top-right small logo */}
        <img src={gdg} alt="gdg club logo" className="absolute top-4 right-4 w-12 h-12" />
        
        {/* Main centered logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="our website logo" className="w-24 h-24" />
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-800">HR MANAGER</h2>
        
        {/* Discord Login Button */}
        <div className="flex justify-center mt-8">
        <Link to= "/"> 
          <button className="flex items-center justify-center w-40 bg-blue-700 text-white px-4 py-3 rounded-xl shadow hover:bg-blue-800 transition gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              className="w-5 h-5"
            >
              <path
                fill="currentColor"
                d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
              />
            </svg>
            <span className="text-lg font-medium">Login</span>
          </button></Link> 
        </div>
      </div>
    </div>
  );
};

export default Login;