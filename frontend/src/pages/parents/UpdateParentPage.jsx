import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../lib/axios'
import { toast } from 'react-toastify'


export default function UpdateParentPage() {
  const params = useParams()
  const parentId = params.parentId
  
  const [parent, setParent] = useState({})
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
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

  useEffect(() => {
    const getParentsAPI = async () =>{
      try {
        const { data } = await api(`/api/parents/${parentId}`)
        setParent(data)
        setFormData({
          firstName: data.user.userDetail.firstName || '',
        })
        setLoading(false);
      } catch (error) {
        toast.error(error.message)
        setLoading(false);
      }
    }
    getParentsAPI();
  }, [])

  const handlerChange = (event) => {
    event.preventDefault ();
    setFormData ({
			...formData,
			[event.target.name]: event.target.value
		})
  }
  
  return (
    <div className='w-full px-6 pt-6'>
      <form  className="p-6 sm:p-10">
        <div className='border-b border-gray-900/10 pb-10'>
          <h1 className='text-2xl font-semibold leading-7 text-gray-900'>Editar acudiente</h1>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
            <div className="mt-2">
              <input 
                type="text" 
                name="firstName" 
                id="firstName"
                value={formData.firstName}
                onChange={handlerChange}
                className="block w-full border rounded-md border-gray-300 py-1.5 p-2 text-gray-800 appearance-none focus:outline-none focus:border-blue-200"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
