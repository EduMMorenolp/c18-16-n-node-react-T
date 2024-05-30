import { useForm } from 'react-hook-form';
import { Image } from "react-bootstrap";
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
                    <label htmlFor="firstName" className="form-label">Nombre</label>
                    <input 
                      id="firstName" 
                      type="text" 
                      className="form-control" 
                      placeholder=""
                      {...register('firstName', {
                        required: "El nombre es obligatorio ",
                      })}

                    />
                    {errors.firstName && (
                      <Error>{errors.firstName?.message}</Error>
                    )}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="lastName" className="form-label">Apellidos</label>
                    <input
                     id="lastName"
                     type="text"
                     className="form-control"
                     placeholder=""
                     {...register('lastName', {
                        required: "El apellido es obligatorio ",
                     })}
                    />
                    {errors.lastName && (
                      <Error>{errors.lastName?.message}</Error>
                    )}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="birthdate" className="form-label">Fecha de nacimiento</label>
                    <input
                      id="birthdate"
                      type="date"
                      className="form-control"
                      {...register('birthdate', { 
                        required: "La fecha de nacimiento es obligatorio",
                      })}
                    />
                    {errors.birthdate && (
                      <Error>{errors.birthdate?.message}</Error>
                    )}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input
                      id="dni"
                      type="text"
                      className="form-control"
                      {...register('dni', {
                        required: "El DNI es obligatorio",
                      })}
                    />
                    {errors.dni && (
                      <Error>{errors.dni?.message}</Error>
                    )}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="gender" className="form-label">Genero</label>
                    <select
                      id="gender"
                      className="form-select"
                      {...register('gender', {
                        required: "El genero es obligatorio",
                      })}
                    >
                      

                    </select>
                    {errors.gender && (
                      <Error>{errors.gender?.message}</Error>
                    )}
                  </div>

                  <div className="mb-3 mt-3">
                    <label htmlFor="city" className="form-label">Ciudad</label>
                    <input
                      id="city"
                      type="text"
                      className="form-control"
                      placeholder=""
                      {...register('city', {
                        required: "La ciudad es obligatorio",
                      })}
                    />
                    {errors.city && (
                      <Error>{errors.city?.message}</Error>
                    )}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="district" className="form-label">Distrito</label>
                    <input
                     id="district"
                     type="text"
                     className="form-control"
                     placeholder=""
                     {...register('district', {
                      required: "El distrito es obligatorio",
                     })}
                    />
                    {errors.district && (
                      <Error>{errors.district?.message}</Error>
                    )}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="country" className="form-label">Pais</label>
                    <input
                      id="country"
                      type="text"
                      className="form-control"
                      placeholder=""
                      {...register('country', { 
                        required: "El pais es obligatorio",
                      })}
                    />
                    {errors.country && (
                      <Error>{errors.country?.message}</Error>
                    )}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="address" className="form-label">Direccion</label>
                    <input
                      id="address"
                      type="text"
                      className="form-control"
                      placeholder=""
                      {...register('address', {
                        required: "La direccion es obligatorio",
                      })}
                    />
                     {errors.address && (
                      <Error>{errors.address?.message}</Error>
                    )}
                  </div>

                  <div className="mb-3 mt-3">
                    <label htmlFor="phone" className="form-label">Telefono</label>
                    <input
                      id="phone"
                      type="number"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  
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
                    <label htmlFor="roleId" className="form-label">Rol</label>
                    <select
                      id="roleId"
                      className="form-select"
                      {...register('roleId',{
                        required: 'El rol es obligatorio'
                      })}
                    >

                    </select>
                    {errors.roleId && (
                      <Error>{errors.roleId?.message}</Error>
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


