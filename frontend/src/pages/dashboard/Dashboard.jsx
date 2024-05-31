const Dashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
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
        <div className="mt-auto">
          <a href="#" className="nav-link text-white">
            Cerrar sesión
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center bg-warning p-3">
          <h1 className="h4 mb-0">INSTITUCIÓN EDUCATIVA PEPITO PEREZ</h1>
          <div>
            <button className="btn btn-outline-primary mx-1">
              Administrador
            </button>
            <button className="btn btn-outline-primary mx-1">Profesor</button>
            <button className="btn btn-outline-primary mx-1">Acudiente</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-light p-3">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                BIBLIOTECA DIGITAL
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                EVENTOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CAPACITACIONES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                DIRECTORIO
              </a>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="p-3">
          <div className="d-flex align-items-center mb-4">
            <img
              src="/path/to/books.png"
              alt="Books"
              className="img-fluid"
              style={{ width: "150px" }}
            />
            <div className="ms-3">
              <p>
                Lorem ipsum dolor sit amet consectetur. Integer lectus accumsan
                sollicitudin enim nisi ipsum nunc. Sit sit quam viverra
                condimentum netus. Lobortis pharetra purus quam risus nibh.
                Donec adipiscing quis leo sed sagittis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Integer lectus accumsan
                sollicitudin enim nisi ipsum nunc. Sit sit quam viverra
                condimentum netus. Lobortis pharetra purus quam risus nibh.
                Donec adipiscing quis leo sed sagittis.
              </p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Integer lectus accumsan
              sollicitudin enim nisi ipsum nunc. Sit sit quam viverra
              condimentum netus. Lobortis pharetra purus quam risus nibh. Donec
              adipiscing quis leo sed sagittis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Integer lectus accumsan
              sollicitudin enim nisi ipsum nunc. Sit sit quam viverra
              condimentum netus. Lobortis pharetra purus quam risus nibh. Donec
              adipiscing quis leo sed sagittis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
