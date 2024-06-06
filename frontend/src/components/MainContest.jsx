const MainContent = ({ userType }) => {
  return (
    <div className="p-3">
      {/* Contenido común para todos los tipos de usuario */}
      {userType === "" && (
        <>
          <div className="d-flex align-items-center mb-4">
            <img
              src="/3532127.webp"
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
        </>
      )}
      {/* Contenido específico para el administrador */}
      {userType === "administrador" && (
        <div>
          <h2>Panel de administrador</h2>
          <p>Aquí va el contenido específico para el administrador...</p>
        </div>
      )}

      {/* Contenido específico para el profesor */}
      {userType === "profesor" && (
        <div>
          <h2>Panel de profesor</h2>
          <p>Aquí va el contenido específico para el profesor...</p>
        </div>
      )}

      {/* Contenido específico para el acudiente */}
      {userType === "acudiente" && (
        <div>
          <h2>Panel de acudiente</h2>
          <p>Aquí va el contenido específico para el acudiente...</p>
        </div>
      )}
    </div>
  );
};

export default MainContent;
