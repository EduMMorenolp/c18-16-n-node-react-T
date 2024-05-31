import { useForm } from 'react-hook-form';
import { Image } from "react-bootstrap";
import Error from '../../components/Error';
import { useMutation } from '@tanstack/react-query';
import { createAccount } from '../../api/AuthAPI';
import { toast } from "react-toastify";
export default function Register() {
  const { register, handleSubmit, watch, reset, formState:{ errors } } = useForm();
  
  const { mutate } = useMutation({
    mutationFn: createAccount,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data.message)
      reset()
    }
  })
  
  const password = watch('password');
  
  const handleRegister = async (formData) =>  mutate({
    ...formData,
  })

  return (
    <div className="vh-100">
      <div className="container py-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-7">
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
                <form onSubmit={handleSubmit(handleRegister)}>
                  <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Correo electronico</label>
                    <input
                     id="email"
                     type="text"
                     className="form-control"
                     placeholder="Email de Registro"
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
                    <label htmlFor="password_confirmation" className="form-label">Repetir Password</label>
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


