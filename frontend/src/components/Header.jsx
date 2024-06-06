import React, { useState } from "react";

const Header = ({ onUserChange }) => {
  const [selectedUser, setSelectedUser] = useState("");

  const handleUserChange = (userType) => {
    if (selectedUser === userType) {
      setSelectedUser("");
      onUserChange("");
    } else {
      setSelectedUser(userType);
      onUserChange(userType);
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center bg-warning p-3">
      <h1 className="h4 mb-0">INSTITUCIÓN EDUCATIVA PEPITO PEREZ</h1>
      <div>
        <button
          className={`btn btn-outline-primary mx-1 ${
            selectedUser === "administrador" && "active"
          }`}
          onClick={() => handleUserChange("administrador")}
        >
          <img
            src="/2784445.png"
            alt="Administrador"
            className="img-fluid"
            style={{ width: "30px" }}
          />
          Administrador
        </button>
        <button
          className={`btn btn-outline-primary mx-1 ${
            selectedUser === "profesor" && "active"
          }`}
          onClick={() => handleUserChange("profesor")}
        >
          <img
            src="/2949916.png"
            alt="Profesor"
            className="img-fluid"
            style={{ width: "30px" }}
          />
          Profesor
        </button>
        <button
          className={`btn btn-outline-primary mx-1 ${
            selectedUser === "acudiente" && "active"
          }`}
          onClick={() => handleUserChange("acudiente")}
        >
          <img
            src="/sinfondo.png"
            alt="Acudiente"
            className="img-fluid"
            style={{ width: "20px" }}
          />
          Acudiente
        </button>
      </div>
    </div>
  );
};

export default Header;
