
const Header = () => {
  return (
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
  );
};

export default Header;
