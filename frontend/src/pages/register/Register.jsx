import React, { useState } from 'react'
export default function Register() {

  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    rolId: ''
  })

  const handlerChange = (event) => {
    event.preventDefault ();
    const { name, value } = event.target
    setInput((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = async(event) => {
    event.preventDefault ();
    console.log(input)
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
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={input.name}
                      onChange={handlerChange}
                      className="form-control" 
                      placeholder="Nombres y apellidos"
                    />
                  </div>

                  <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Correo electronico</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={input.email}
                      onChange={handlerChange}
                      className="form-control" 
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input 
                      type="password" 
                      id="password"
                      name="password"
                      value={input.password}
                      onChange={handlerChange}
                      className="form-control" 
                      placeholder="***************"
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="role" className="form-label">Rol</label>
                    <select id="role" className="form-select">
                      
                    </select>
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


