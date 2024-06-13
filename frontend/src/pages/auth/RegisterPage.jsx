import { User, Mail, Key, Lock } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Error from '../../components/Error';
import { createAccount } from '../../api/AuthAPI';
import { useAuth } from '../../hooks/useAuth';

export default function RegisterPage() {

  const [searchParams] = useSearchParams();
  const userType = searchParams.get('type');
  
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
  
  const handleRegister = async (formData) => {
    mutate({
      ...formData,
      roleName: userType
    });
  };
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6 sm:p-10 min-h-[500px]">
        <img 
            src="/edulinker.jpg" 
            alt="Logo"
            className="w-36 h-45 mx-auto"
        />
        <h1 className="text-xl font-black text-btnBg-dark text-center">Bienvenido</h1>
        
        <form onSubmit={handleSubmit(handleRegister)} className="w-full flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-5">
                <div className="flex items-center text-sm">
                    <User className='absolute ml-3 h-4 w-4 text-gray-600'/>
                    <input
                        type="text"
                        placeholder="Nombres y apellidos"
                        className="py-2 pl-10 border border-gray-500 w-full
                        text-gray-800 appearance-none
                        focus:outline-none  rounded-lg"
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
                    <Mail className='absolute ml-3 h-4 w-4 text-gray-600'/>
                    <input
                        id="email"
                        type="email"
                        placeholder="Correo electronico"
                        className="py-2 pl-10 border border-gray-500 w-full
                        text-gray-800 appearance-none
                        focus:outline-none rounded-lg"
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
                    <Key className='absolute ml-3 h-4 w-4 text-gray-600'/>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="py-2 pl-10 border border-gray-500 w-full
                        text-gray-800 appearance-none
                        focus:outline-none rounded-lg"
                        {...register("password", {
                            required: "La contraseña es obligatorio",
                            minLength: {
                              value: 8,
                              message: 'La contraseña debe ser mínimo de 8 caracteres'
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
                    <Lock className='absolute ml-3 h-4 w-4 text-gray-600'/>
                    <input
                        type="password"
                        placeholder="Confirmar contraseña"
                        className="py-2 pl-10 border border-gray-500 w-full
                        text-gray-800 appearance-none
                        focus:outline-none rounded-lg"
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

            <input type="submit" value="REGISTRARSE" className="w-full bg-btnBg-light text-white py-3 px-4 rounded-md shadow-sm uppercase text-xs font-bold text-center"/>
        </form>
        <hr className="w-full mt-6 border-t border-[#13446B]"/>
        <nav className="mt-2 flex flex-col space-y-4">
            <Link
                to={'/auth/login'}
                className="text-center text-black text-sm font-semibold"
            >¿Ya tienes cuenta?  Iniciar Sesión</Link>
      </nav>
      </div>
    </div>
  );
}
