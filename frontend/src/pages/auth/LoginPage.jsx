import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Key, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Error from '../../components/Error';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(true);

  const {userInfo, login } = useAuth();
  const navigate = useNavigate()

  
  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      await login({...values});
      navigate('/');
    } catch (error) {
      toast.error(error.message)
      setLoading(false);
    }
  }

  return (
  <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-xs bg-white rounded-2xl shadow-md p-6 sm:p-9 min-h-[500px]">
      <img 
        src="/edulinker.jpg" 
            alt="Logo"
            className="w-36 h-45 mx-auto"
      />
      <h1 className="text-xl font-black text-btnBg-dark text-center">Bienvenido</h1>
      <form onSubmit={handleSubmit(handleLogin)} className="w-full flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-5">
          <div className="flex items-center text-sm">
            <User className='absolute ml-3 h-4 w-4 text-gray-600'/>
            <input
              id="email"
              type="email"
              placeholder="Usuario"
              className="py-2 pl-10 border border-gray-500 w-full
              text-gray-800 appearance-none
               focus:outline-none  rounded-lg"
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
            <Key className='absolute ml-3 h-4 w-4 text-gray-600'/>
            <input
              type="password"
              placeholder="Contraseña"
              className="py-2 pl-10 border border-gray-500 w-full
              text-gray-800 appearance-none
               focus:outline-none  rounded-lg"
              {...register("password", {
                required: "El password es obligatorio",
              })}
            />
            
          </div>
          {errors.password && (
              <Error>{errors.password.message}</Error>
          )}
        </div>

        <div className="flex justify-center gap-4">
          <input type="submit" value="Iniciar sesión" className="bg-orangeBtn hover:bg-orange-700 text-white px-2 rounded-md shadow-sm uppercase text-xs font-bold w-full"/>
          <Link 
            to={"/auth/user-type"} 
            className="bg-btnBg-light  text-white py-2 px-2 rounded-md shadow-sm uppercase text-center text-xs font-bold w-full">
            Registrarse
          </Link>
        </div>
      </form>
      <hr className="w-full mt-6 border-t border-[#13446B] " />
      <nav className="mt-2 flex flex-col space-y-4">
        <Link
          to={'/auth/forgot-password'}
          className="text-center text-black text-sm font-semibold"
        >¿Olvidaste tu contraseña?</Link>
      </nav>
    </div>
  </div>
  )
}
