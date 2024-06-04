import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md px-6 py-10 flex flex-col items-center justify-center pt-4">
      <img 
        src="/edulinker.jpg" 
        alt="Logo"
        className="w-60 h-44"
      />
      <h1 className="text-2xl font-black mt-6 dark:text-[#13446B]">Bienvenido</h1>
      <form action="#" className="w-full flex flex-col gap-4 mt-4">
        <div className="flex items-center text-sm">
          <AtSymbolIcon className='absolute ml-3 h-4 w-4 text-gray-600'/>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="py-2 pl-10 border border-gray-200 w-full
            text-gray-800 appearance-none
            focus:text-gray-500 focus:outline-none focus:border-blue-200 rounded-lg"
          />
        </div>
        <div className="flex items-center text-sm mb-6 md:mb-8 ">
          <LockClosedIcon className='absolute ml-3 h-4 w-4  text-gray-600'/>
          <input
            id="email"
            type="email"
            placeholder="Password de Registro"
            className="py-2 pl-10 border border-gray-200 w-full
            text-gray-800 appearance-none
            focus:text-gray-500 focus:outline-none focus:border-blue-200 rounded-lg"
          />
        </div>

        <div className="flex justify-center gap-4">
          <input type="submit" value="Iniciar sesión" className="dark:bg-[#E44D15] hover:bg-[#f45419] text-white py-2 px-4 rounded-md shadow-sm uppercase text-sm font-medium w-full"/>
          <Link 
            to={"/"} 
            className="dark:bg-[#13446B] hover:bg-[#175281] text-white py-2 px-4 rounded-md shadow-sm uppercase text-sm text-center font-medium w-full">
              Registrarse
            </Link>
        </div>
      </form>
      <hr className="w-full my-8 border-t border-[#13446B] " />
      <nav className="flex flex-col space-y-4">
      <Link
        to={'/auth/forgot-password'}
        className="text-center text-black text-sm font-semibold"
      >¿Olvidaste tu contraseña? Reestablecer</Link>
      </nav>
    </div>
  )
}
