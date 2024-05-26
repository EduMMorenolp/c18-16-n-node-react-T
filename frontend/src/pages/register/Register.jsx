import { useForm } from 'react-hook-form';
import Error from '../../components/Error';
import Swal from "sweetalert2";
export default function Register() {
  const { register, handleSubmit, formState:{ errors }, reset } = useForm();

  const registerUser = (data) => {
    reset()
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "El usuario ha sido guardado",
      showConfirmButton: false,
      timer: 1600
    });
  }
  return (
    <div className="vh-100">
      <div className="container py-4">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-6">
            <div className="card cascading-right bg-body-tertiary">
              <div className='text-center mt-5'>
                <img
                  src='../placeholder.jpg'
                  alt='imagen logotipo'
                  className="rounded-circle shadow-4"
                  style={{ maxWidth: '110px', height: 'auto' }} 
                />
              </div>
              <div className="card-body p-5 shadow-5">
                <form onSubmit={handleSubmit(registerUser)}>
                 
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electronico</label>
                    <input 
                      id="email"
                      type="email" 
                      className="form-control" 
                      placeholder="name@example.com"
                      {...register('email',{ 
                        required: "El correo electronico es Obligatorio",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email No Válido'
                        }
                      })}
                    />
                    {errors.email && (
                      <Error>{errors.email?.message}</Error>
                    )}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input 
                      id="password"
                      type="password" 
                      className="form-control" 
                      placeholder="***************"
                      {...register('password',{ 
                        required: 'La contaseña es obligatorio',
                      })}
                    />
                    {errors.password && (
                      <Error>{errors.password?.message}</Error>
                    )}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="role" className="form-label">Rol</label>
                    <select 
                      id="role" 
                      className="form-select"
                      {...register("rolId", {
                        required: 'El rol es obligatorio',
                      })}
                    >
                      
                    </select>
                    {errors.rolId && (
                      <Error>{errors.rolId?.message}</Error>
                    )}
                  </div>

                  <div className="mb-3 mt-4">
                    <input type='submit' className="btn btn-primary w-100 text-uppercase" value='Guardar Usuario'/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


