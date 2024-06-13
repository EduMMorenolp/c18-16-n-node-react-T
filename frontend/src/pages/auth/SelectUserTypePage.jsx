import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function SelectUserTypePage() {
  const {userInfo } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8 min-h-[320px]">
        <img 
          src="/edulinker.jpg" 
          alt="Logo"
          className="w-36 h-45 mx-auto"
        />
        <h1 className="text-lg font-black text-btnBg-dark text-center mb-6">Únete a Edulinker como: </h1>
        <div className='flex justify-center space-x-2'>
          <button
            onClick={() => navigate('/auth/verification?type=Estudiante')}
            className="inline-block px-4 py-2 text-sm font-medium bg-btnBg-light text-white  border rounded-md "
          >
            Estudiante
          </button>
          <button
            onClick={() => navigate('/auth/verification?type=Padre')}
            className="inline-block px-4 py-2 text-sm font-medium bg-btnBg-light text-white  border rounded-md "
          >
            Padre
          </button>
          <button
            onClick={() => navigate('/auth/verification?type=Profesor')}
            className="inline-block px-4 py-2 text-sm font-medium bg-btnBg-light text-white  border rounded-md "
          >
            Profesor
          </button>
        </div>
      </div>
    </div>
  )
}
