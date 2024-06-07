import { KeyIcon, UserIcon } from '@heroicons/react/20/solid';
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useMutation } from '@tanstack/react-query';
import { ArrowLeft } from 'lucide-react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Error from '../../components/Error';
import { createAccount } from '../../api/AuthAPI';
import { useAuth } from '../../hooks/useAuth';

export default function RegisterPage() {
  const { register, handleSubmit, watch, reset, formState:{ errors } } = useForm();
  
  const {userInfo } = useAuth();
  const navigate = useNavigate()

  
  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])


  const { mutate } = useMutation({
    mutationFn: createAccount,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
      reset()
    }
  })
  
  const password = watch('password');
  
  const handleRegister = async (formData) =>  mutate({
    ...formData,
  })
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8">
        <div className="-ml-2 flex items-center">
            <Link to="/auth/login" className="flex items-center">
                <ArrowLeft className="h-5 w-5"/>
                <span className="ml-1 text-sm font-medium">Atrás</span>
            </Link>
        </div>
        <img 
            src="/edulinker.jpg" 
            alt="Logo"
            className="w-60 h-44 mx-auto"
        />
        <h1 className="text-2xl font-black  dark:text-[#13446B] text-center">Bienvenido</h1>
        
        <form onSubmit={handleSubmit(handleRegister)} className="w-full flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-5">
                <div className="flex items-center text-sm">
                    <UserIcon className='absolute ml-3 h-4 w-4 text-gray-600'/>
                    <input
                        type="text"
                        placeholder="Nombres y apellidos"
                        className="py-2 pl-10 border border-gray-200 w-full
                        text-gray-800 appearance-none
                        focus:text-gray-500 focus:outline-none focus:border-blue-200 rounded-lg"
                        {...register("name", {
                            required: "El Nombre de usuario es obligatorio",
                        })}
                    />
                </div>
                {errors.name && (
                    <Error>{errors.name.message}</Error>
                )}
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex items-center text-sm">
                    <AtSymbolIcon className='absolute ml-3 h-4 w-4 text-gray-600'/>
                    <input
                        id="email"
                        type="email"
                        placeholder="Correo electronico"
                        className="py-2 pl-10 border border-gray-200 w-full
                        text-gray-800 appearance-none
                        focus:text-gray-500 focus:outline-none focus:border-blue-200 rounded-lg"
                        {...register("email", {
                            required: "El Email de registro es obligatorio",
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
                    <LockClosedIcon className='absolute ml-3 h-4 w-4 text-gray-600'/>
                    <input
                        type="password"
                        placeholder="Password"
                        className="py-2 pl-10 border border-gray-200 w-full
                        text-gray-800 appearance-none
                        focus:text-gray-500 focus:outline-none focus:border-blue-200 rounded-lg"
                        {...register("password", {
                            required: "El Password es obligatorio",
                            minLength: {
                              value: 8,
                              message: 'El Password debe ser mínimo de 8 caracteres'
                            }
                        })}
                    />
                </div>
                {errors.password && (
                    <Error>{errors.password.message}</Error>
                )}
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex items-center text-sm">
                    <KeyIcon className='absolute ml-3 h-4 w-4 text-gray-600'/>
                    <input
                        type="password"
                        placeholder="Repite Password de Registro"
                        className="py-2 pl-10 border border-gray-200 w-full
                        text-gray-800 appearance-none
                        focus:text-gray-500 focus:outline-none focus:border-blue-200 rounded-lg"
                        {...register("password_confirmation", {
                            required: "Repetir Password es obligatorio",
                            validate: value => value === password || 'Los Passwords no son iguales'
                        })}
                    />
                </div>
                {errors.password_confirmation && (
                    <Error>{errors.password_confirmation.message}</Error>
                )}
            </div>

            <input type="submit" value="REGISTRARSE" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-sm uppercase text-sm text-center font-black"/>
        </form>
        <hr className="w-full my-8 border-t border-[#13446B]"/>
        <nav className="mt-5 flex flex-col space-y-4">
            <Link
                to={'/auth/login'}
                className="text-center text-black text-sm font-semibold"
            >¿Ya tienes cuenta?  Iniciar Sesión</Link>

            <Link
                to={'/auth/forgot-password'}
                className="text-center text-black text-sm font-semibold"
            >¿Olvidaste tu contraseña?  Reestablecer</Link>
      </nav>
      </div>
    </div>
  );
}
