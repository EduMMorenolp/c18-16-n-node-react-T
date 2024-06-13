import { useNavigate } from 'react-router-dom'

export default function CreateTeacherPage() {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-3xl bg-white border border-gray-300 rounded-lg p-4 sm:p-6 shadow-md">
        <form className="p-4 sm:p-6">
          <div className='border-b border-gray-900/10 pb-10'>
            <h1 className='text-xl text-center font-bold leading-7 mt-4 text-marineBlue uppercase'>Datos del profesor</h1>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                  <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                  <div class="mt-2">
                    <input 
                      type="text" 
                      name="first-name" 
                      id="first-name" 
                      className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                    />
                  </div>
              </div>
              <div class="sm:col-span-3">
                  <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900">Apellidos</label>
                  <div className="mt-2">
                    <input 
                      type="text" 
                      name="last-name" 
                      id="last-name"  
                      className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                    />
                  </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="dni" className="block text-sm font-medium leading-6 text-gray-900">DNI</label>
                <div class="mt-2">
                  <input 
                    type="number" 
                    name="dni" 
                    id="dni" 
                    className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Telefono</label>
                <div className="mt-2">
                  <input 
                    type="number" 
                    name="phone" 
                    id="phone"  
                    className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="birthdate" className="block text-sm font-medium leading-6 text-gray-900">Fecha de nacimiento</label>
                <div class="mt-2">
                  <input 
                    type="date" 
                    name="birthdate" 
                    id="birthdate" 
                    className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                  <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">Genero</label>
                  <div className="mt-2">
                    <select
                      className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                    >
                      <option value="" disabled>--Seleccione un genero--</option>
                    </select>
                  </div>
              </div>
              <div class="col-span-full">
                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Direccion</label>
                <div class="mt-2">
                  <input 
                    type="text" 
                    name="address" 
                    id="address"  
                    className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo electronico</label>
                <div class="mt-2">
                  <input 
                    type="text" 
                    name="email" 
                    id="email"  
                    className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label htmlFor="academicDegree" className="block text-sm font-medium leading-6 text-gray-900">Titulo academico</label>
                <div class="mt-2">
                  <input 
                    type="text" 
                    name="academicDegree" 
                    id="academicDegree"  
                    className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="yearOfExperience" className="block text-sm font-medium leading-6 text-gray-900">Años de experiencia</label>
                <div class="mt-2">
                  <input 
                    type="number" 
                    name="yearOfExperience" 
                    id="yearOfExperience"  
                    className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="hire_date" className="block text-sm font-medium leading-6 text-gray-900">Fecha de contratacion</label>
                <div class="mt-2">
                  <input 
                    type="date" 
                    name="hire_date" 
                    id="hire_date"  
                    className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-end gap-x-6">
            <button 
              type="button" 
              onClick={() => navigate("/teachers")} 
              className="text-sm font-bold text-primaryBlue rounded-lg border  px-6 py-3 uppercase"
              style={{ borderColor: '#4481EB' }}
            >
                Cancelar
              </button>
            <button 
              type="submit"
              className="rounded-md px-6 py-3 text-sm  text-white font-bold shadow-sm bg-btnBg-oceanBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 uppercase"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
