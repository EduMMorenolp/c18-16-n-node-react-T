import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createParent } from '../../api/ParentAPI'
import { toast } from 'react-toastify'

export default function CreateParentPage() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false); 
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    birthdate: '',
    gender: '',
    address: '',
    phone: '',
    dni: '',
    name: '',
    email: '',
    password: '',
    roleId: 3
  })

  const handlerChange = (event) => {
    event.preventDefault ();
    setInput ({
			...input,
			[event.target.name]: event.target.value
		})
  }

  const [errors, setErrors] = useState ({
    firstName: '',
    lastName: '',
    birthdate: '',
    gender: '',
    address: '',
    phone: '',
    dni: '',
    email: '',
    password: ''
  })

  const {mutate} = useMutation({
    mutationFn: createParent,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
      navigate('/parents')
    }
})

  const handleSubmit = async(event) => {
    event.preventDefault();
    mutate({
      ...input
    })
  }

  const diseableHandler = () =>{
    let diseable
    for (let error in errors) {
      if(errors[error] === ""){
        diseable=false;
      }else{
        diseable=true;
        break
      }
    }
    return diseable
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-3xl bg-white border border-gray-300 rounded-lg p-4 sm:p-5 shadow-md">
        <form onSubmit={handleSubmit} className="p-4 sm:p-6">
          <div className='border-b border-gray-900/10 pb-10'>
            <h1 className='text-xl text-center font-bold leading-7 mt-4 text-marineBlue uppercase'>Datos del acudiente</h1>
            <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                  <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                  <div className="mt-2">
                    <input 
                      type="text" 
                      name="firstName" 
                      id="firstName"
                      value={input.firstName}
                      onChange={handlerChange}
                      className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                    />
                  </div>
              </div>
              <div className="sm:col-span-3">
                  <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Apellidos</label>
                  <div className="mt-2">
                    <input 
                      type="text" 
                      name="lastName" 
                      id="lastName"
                      value={input.lastName}
                      onChange={handlerChange}  
                      className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                    />
                  </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                  <label htmlFor="dni" className="block text-sm font-medium leading-6 text-gray-900">DNI</label>
                  <div className="mt-2">
                    <input 
                      type="number" 
                      name="dni" 
                      id="dni" 
                      value={input.dni}
                      onChange={handlerChange}
                      className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                    />
                  </div>
              </div>
            <div className="sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Telefono</label>
                <div className="mt-2">
                  <input 
                    type="number" 
                    name="phone" 
                    id="phone"
                    value={input.phone} 
                    onChange={handlerChange}
                    className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                  />
                </div>
            </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                  <label htmlFor="birthdate" className="block text-sm font-medium leading-6 text-gray-900">Fecha de nacimiento</label>
                  <div className="mt-2">
                    <input 
                      type="date" 
                      name="birthdate" 
                      id="birthdate" 
                      value={input.birthdate}
                      onChange={handlerChange}
                      className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                    />
                  </div>
              </div>
              <div className="sm:col-span-3">
                  <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">Genero</label>
                  <div className="mt-2">
                    <select
                      name="gender"
                      value={input.gender}
                      onChange={handlerChange}
                      className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                    >
                      <option value="" disabled>--Seleccione un genero--</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                  </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Direccion</label>
                <div className="mt-2">
                  <input 
                    type="text" 
                    name="address" 
                    id="address"
                    value={input.address}
                    onChange={handlerChange}
                    className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo electronico</label>
                <div className="mt-2">
                  <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={input.email}
                    onChange={handlerChange}  
                    className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                <div className="mt-2">
                  <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={input.password} 
                    onChange={handlerChange}
                    className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-end gap-x-6">
            <button 
              type="button" 
              onClick={() => navigate("/parents")} 
              className="text-sm font-bold text-primaryBlue rounded-lg border  px-6 py-3 uppercase"
              style={{ borderColor: '#4481EB' }}
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              disabled={diseableHandler()}
              className="rounded-md px-6 py-3 text-sm  text-white font-bold shadow-sm bg-btnBg-oceanBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 uppercase"
            >Guardar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
