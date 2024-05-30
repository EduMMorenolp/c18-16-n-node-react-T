import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Image } from "react-bootstrap";
import Error from "../../components/Error";
import Swal from "sweetalert2";
import axios from "axios"; // Importa Axios

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const loginUser = async (data) => {
    try {
      console.log("Datos enviados:", data);
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        data
      );

      console.log("Respuesta del servidor:", response);
      if (response.data.data && response.data.data.token) {
        localStorage.setItem("token", response.data.data.token);

        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Inicio de sesión exitoso",
          showConfirmButton: false,
          timer: 1600,
        });
      } else {
        console.error(
          "Error al iniciar sesión: No se recibió el token",
          response.data
        );
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="vh-100">
      <div className="container py-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-9">
            <div className="card">
              <div className="text-center mt-5">
                <Image
                  src="../placeholder.jpg"
                  alt="imagen logotipo"
                  className="rounded-circle shadow-4"
                  style={{ maxWidth: "110px", height: "auto" }}
                />
              </div>
              <div className="card-body p-5 shadow-5">
                <form onSubmit={handleSubmit(loginUser)}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                      {...register("email", {
                        required: "El correo electrónico es obligatorio",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Correo electrónico no válido",
                        },
                      })}
                    />
                    {errors.email && <Error>{errors.email?.message}</Error>}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="password" className="form-label">
                      Contraseña
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      placeholder="***************"
                      {...register("password", {
                        required: "La contraseña es obligatoria",
                      })}
                    />
                    {errors.password && (
                      <Error>{errors.password?.message}</Error>
                    )}
                  </div>
                  <div className="mb-3 mt-4">
                    <input
                      type="submit"
                      className="btn btn-primary w-100 text-uppercase"
                      value="Iniciar Sesión"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
