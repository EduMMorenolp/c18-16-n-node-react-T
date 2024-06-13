import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SelectUserType() {
  const navigate = useNavigate();
 
  const handleRegistration = (userType) => {
    navigate(`/auth/register?type=${userType}`);
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8 min-h-[320px]">
        <img 
          src="/edulinker.jpg" 
          alt="Logo"
          className="w-36 h-45 mx-auto"
        />
        <h1 className="text-lg font-black text-[#13446B] text-center mb-6">Únete a Edulinker como</h1>
        <div className='flex justify-center space-x-4'>
          <button
            onClick={() => handleRegistration('Padre')}
            className="inline-block px-4 py-2 text-sm font-medium bg-btnBg-light text-white  border rounded-md hover:bg-gray-50 focus:relative"
          >
            Estudiante
          </button>
          <button
            onClick={() => handleRegistration('Profesor')}
            className="inline-block px-4 py-2 text-sm font-medium bg-btnBg-light text-white  border rounded-md hover:bg-gray-50 focus:relative"
          >
            Padre
          </button>
          <button
            onClick={() => handleRegistration('Estudiante')}
            className="inline-block px-4 py-2 text-sm font-medium bg-btnBg-light text-white  border rounded-md hover:bg-gray-50 focus:relative"
          >
            Profesor
          </button>
        </div>
      </div>
    </div>
  )
}
