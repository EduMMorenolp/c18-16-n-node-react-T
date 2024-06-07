import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPasswordPage() {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6 sm:p-10">
        <h1 className="text-2xl font-black text-center">Reestablecer Password</h1>
        <p className="text-base font-ligh text-black mt-5">
            ¿Olvidaste tu password? coloca tu email {'  '}
            <span className=" text-orange-600 font-bold">  y reestable tu password</span>
        </p>
        <form  className="space-y-8 mt-10">
          <div className="flex flex-col gap-2">
            <label
              className="font-normal text-xl"
              htmlFor="email"
            >Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email de Registro"
              className="w-full p-3  border-gray-300 border rounded-lg"
            />
          </div>
          
          <input
            type="submit"
            value='Enviar Instrucciones'
            className="bg-orange-600 hover:bg-orange-700 w-full p-2  rounded-md shadow-sm text-white font-black text-xl cursor-pointer"
          />
        </form>
        <nav className="mt-10 flex flex-col space-y-4">
          <Link
            to='/auth/login'
            className="text-center font-normal"
          >
            ¿Ya tienes cuenta? Iniciar Sesión
          </Link>

          <Link
            to='/auth/register'
            className="text-center font-normal"
          >
            ¿No tienes cuenta? Crea una
          </Link>
      </nav>
      </div>
    </div>
  )
}
