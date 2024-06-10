import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NotFound() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="text-center">
        <div className="card shadow-lg p-5" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <p className="lead text-muted">Oops! La página que buscas no existe.</p>
            <p className="text-muted mb-4">
              Parece que la página que intentas encontrar no está disponible o ha sido movida.
            </p>
            <a href="/" className="btn btn-primary btn-lg">
              Volver al inicio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
