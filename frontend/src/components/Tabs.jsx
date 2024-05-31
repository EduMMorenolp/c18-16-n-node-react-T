
const Tabs = () => {
  return (
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
  );
};

export default Tabs;
