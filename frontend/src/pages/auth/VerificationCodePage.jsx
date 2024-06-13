import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import api from '../../lib/axios';
import Loading from '../../components/Loading';
import { useAuth } from '../../hooks/useAuth';

export default function VerificationCodePage() {
  const {userInfo } = useAuth();
  const navigate = useNavigate()

  
  const [verificationCode, setVerificationCode] = useState('');
  const [searchParams] = useSearchParams();
  const userType = searchParams.get('type');
  const [validUserType, setValidUserType] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  useEffect(() => {
    const fetchUserTypes = async () => {
      setLoading(true)
      try {
        const url = `/api/roles/${userType}/role`
        const {data} = await api.get(url);
        if (data.name === userType) {
          setValidUserType(true);
        } else {
          setValidUserType(false);
        }
      } catch (error) {
        navigate("/404")
      }

      setLoading(false);
    }
    fetchUserTypes();
  }, [userType])


  const handleSubmit = (e) => {
      e.preventDefault();
       
      if (verificationCode === '123456') { 
          navigate(`/auth/register?type=${userType}`);
      } else {
        alert('Código incorrecto. Inténtalo de nuevo.');
      }
  };

  if (loading) return <Loading/>
  if (!validUserType) return <Navigate to='/404' />;

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 sm:p-8 min-h-[400px]">
        <img 
          src="/edulinker.jpg" 
          alt="Logo"
          className="w-36 h-45 mx-auto"
        />
        <h1 className="text-lg font-black text-btnBg-dark text-center mb-6">Regístrate en Edulinker </h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-2">
                <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor="varificactionCode"
                >Código de acceso</label>
                <input 
                    type="number" 
                    name="varificactionCode" 
                    id="varificactionCode"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="Ingrese el código de acceso"
                    className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                />
            </div>
            <input type="submit" value="Contunuar" className="w-full bg-btnBg-light text-white py-3 px-4 rounded-md shadow-sm uppercase text-xs font-bold text-center"/>
        </form>
      </div>
    </div>
  )
}
