import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/20/solid';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { authenticateUser } from '../../api/AuthAPI';
import { toast } from 'react-toastify';
import Error from '../../components/Error';
import { useAuth } from '../../hooks/useAuth';

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  
  // const navigate = useNavigate()
  // const { mutate } = useMutation({
  //   mutationFn: authenticateUser,
  //   onError: (error) => {
  //     toast.error(error.message)
  //   },
  //   onSuccess: () => {
  //     navigate('/')
  //   }
  // })
  const handleLogin = async (values) => {
    setLoading(true);
    try {
      login({...values});
      navigate('/')
    } catch (error) {
      setLoading(false);
    }
  }


  return (
  <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-10">
      <img 
        src="/edulinker.jpg" 
        alt="Logo"
        className="w-60 h-44 mx-auto"
      />
      <h1 className="text-2xl font-black  dark:text-[#13446B] text-center">Bienvenido</h1>
      <form onSubmit={handleSubmit(handleLogin)} className="w-full flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-5">
          <div className="flex items-center text-sm">
            <AtSymbolIcon className='absolute ml-3 h-4 w-4 text-gray-600'/>
            <input
              id="email"
              type="email"
              placeholder="Email de Registro"
              className="py-2 pl-10 border border-gray-200 w-full
              text-gray-800 appearance-none
              focus:text-gray-500 focus:outline-none focus:border-blue-200 rounded-lg"
              {...register("email", {
                required: "El Email es obligatorio",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "E-mail no válido",
                },
              })}
            />
          </div>
          {errors.email && (
            <Error>{errors.email.message}</Error>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center text-sm">
            <LockClosedIcon className='absolute ml-3 h-4 w-4  text-gray-600'/>
            <input
              type="password"
              placeholder="Password de Registro"
              className="py-2 pl-10 border border-gray-200 w-full
              text-gray-800 appearance-none
              focus:text-gray-500 focus:outline-none focus:border-blue-200 rounded-lg"
              {...register("password", {
                required: "El password es obligatorio",
              })}
            />
            
          </div>
          {errors.password && (
              <Error>{errors.password.message}</Error>
          )}
        </div>

        <div className="flex justify-center gap-4 mt-2">
          <input type="submit" value="Iniciar sesión" className="dark:bg-[#E44D15] hover:bg-[#f45419] text-white py-2 px-4 rounded-md shadow-sm uppercase text-sm font-medium w-full"/>
          <Link 
            to={"/auth/register"} 
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
  </div>
  )
}
