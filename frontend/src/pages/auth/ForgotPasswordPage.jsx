import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPasswordPage() {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6 sm:p-8">
        <h1 className="text-2xl font-black text-[#13446B] text-center mt-4">Reestablecer Password</h1>
        <form  className="space-y-4 mt-8">
          <div className="flex flex-col gap-2">
            <label
              className="font-normal text-sm"
              htmlFor="email"
            >Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email de Registro"
              className="w-full p-2 border-gray-300 border rounded-lg"
            />
          </div>
          <input type="submit" value="Enviar Instrucciones" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-sm uppercase text-sm text-center font-black"/>
        </form>
        <hr className="w-full mt-6 border-t border-[#13446B]"/>
          <nav className=" mt-4 flex flex-col space-y-4">
            <Link
              to='/auth/login'
              className="text-center text-black text-sm font-semibold"
            >
              ¿Ya tienes cuenta? Iniciar Sesión
          </Link>

          <Link
            to='/auth/register'
            className="text-center text-black text-sm font-semibold"
          >
            ¿No tienes cuenta? Crea una
          </Link>
      </nav>
      </div>
    </div>
  )
}
