import React from "react";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="bg-primary text-white p-3" style={{ width: "250px" }}>
      <div className="mb-4 text-center">
        <img src="/path/to/logo.png" alt="Logo" className="img-fluid" />
        <h5 className="mt-2">Nombre de la Institución: Pepito Perez</h5>
        <p>
          Dirección: xxxxxxxxxx
          <br />
          Teléfono: xxxxxxxxxx
        </p>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <a href="#" className="nav-link text-white">
            Calendario de eventos
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="#" className="nav-link text-white">
            Notificaciones
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="#" className="nav-link text-white">
            Configuración roles y permisos
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="#" className="nav-link text-white">
            Soporte técnico
          </a>
        </li>
      </ul>
      <hr></hr>
      <div className="mt-auto d-flex justify-content-center">
        <button
          onClick={handleLogout}
          className="nav-link text-white border-0 bg-transparent "
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
