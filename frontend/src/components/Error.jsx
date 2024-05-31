import { Link } from "react-router-dom";

export default function Error({ children }) {
  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-1">404</h1>
          <p className="lead">Página no encontrada</p>
          <p>Lo sentimos, pero la página que estás buscando no existe.</p>
          <Link to="/" className="btn btn-primary mt-3">
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
