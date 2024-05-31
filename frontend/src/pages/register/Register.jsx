import { useForm } from 'react-hook-form';
import { Image } from "react-bootstrap";
import Error from '../../components/Error';
import Swal from "sweetalert2";
export default function Register() {
  const { register, handleSubmit, watch, formState:{ errors }, reset } = useForm();

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

  const password = watch('password');
  return (
    <div className="vh-100">
      <div className="container py-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-9">
            <div className="card">
              <div className='text-center mt-5'>
                <Image
                  src='../placeholder.jpg'
                  alt='imagen logotipo'
                  className="rounded-circle shadow-4"
                  style={{ maxWidth: '110px', height: 'auto' }} 
                />
              </div>
              <div className="card-body p-5 shadow-5">
                <form onSubmit={handleSubmit(registerUser)}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input 
                      id="name" 
                      type="text" 
                      className="form-control" 
                      placeholder="Nombre y apellidos"
                      {...register('name', {
                        required: "El nombre es obligatorio ",
                      })}

                    />
                    {errors.name && (
                      <Error>{errors.name?.message}</Error>
                    )}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Apellidos</label>
                    <input
                     id="email"
                     type="text"
                     className="form-control"
                     placeholder=""
                     {...register('email', {
                        required: "El email es obligatorio ",
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
                    <label htmlFor="password_confirmation" className="form-label">Contraseña</label>
                    <input 
                      id="password_confirmation"
                      type="password" 
                      className="form-control" 
                      placeholder="***************"
                      {...register('password_confirmation',{ 
                        required: 'Repetir Password es obligatorio',
                        validate: value => value === password || 'Los Passwords no son iguales'
                      })}
                    />
                    {errors.password_confirmation && (
                      <Error>{errors.password_confirmation?.message}</Error>
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


