import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

export default function ForgotPasswordPage() {
  const {userInfo } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])
  
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xs bg-white rounded-2xl shadow-md p-6 sm:p-8 min-h-[500px]">
        <img 
          src="/edulinker.jpg" 
          alt="Logo"
          className="w-36 h-45 mx-auto"
        />
        <h1 className="text-xl font-black text-btnBg-dark text-center">Reestablecer Password</h1>
        <form  className="space-y-4 mt-8">
          <div className="flex flex-col gap-2">
            <label
              className="block text-lg font-medium leading-6 text-gray-900"
              htmlFor="email"
            >Email</label>
            
            <input
              id="email"
              type="email"
              placeholder="Email de Registro"
              className="py-2 pl-2 border border-gray-500 w-full
              text-gray-800 appearance-none
               focus:outline-none  rounded-lg"
            />
          </div>
          <input type="submit" value="Enviar Instrucciones" className="w-full bg-btnBg-light text-white py-2 px-4 rounded-md shadow-sm uppercase text-xs font-bold text-center"/>
        </form>
        <hr className="w-full mt-6 border-t border-[#13446B]"/>
          <nav className=" mt-2 flex flex-col space-y-2">
            <Link
              to='/auth/login'
              className="text-center text-black text-sm font-semibold"
            >
              ¿Ya tienes cuenta? Iniciar Sesión
          </Link>

          <Link
            to={"/auth/user-type"}
            className="text-center text-black text-sm font-semibold"
          >
            ¿No tienes cuenta? Crea una
          </Link>
      </nav>
      </div>
    </div>
  )
}
