import { NavLink } from "react-router-dom";
const Inicio = () => {
  return (
    <>
      <div className="col">
        <h1>Vive la felicidad !</h1>
        <p>
          ParceBook te ayuda a INCOMUNICARTE y NO COMPARTIR con las personas que forman parte de tu vida. ParceBook te
          ayuda a INCOMUNICARTE y NO COMPARTIR con las personas que forman parte de tu vida. ParceBook te ayuda a
          INCOMUNICARTE y NO COMPARTIR con las personas que forman parte de tu vida. ParceBook te ayuda a INCOMUNICARTE
          y NO COMPARTIR con las personas que forman parte de tu vida.
        </p>

        <NavLink to="/Registro" className="text-decoration-none  fs-2 p-3">
          <i className="bi bi-person-add"></i>
          Registrarse
        </NavLink>

        <NavLink to="/Ingresar" className="text-decoration-none fs-2 p-3">
          <i class="bi bi-person-up"></i>
          Ingresar
        </NavLink>
      </div>
      <div className="col">
        <img src="./images/people.jpg" className="img-fluid shadow-lg p-3 mb-5 bg-body rounded" alt="" sizes="" />
      </div>
    </>
  );
};

export default Inicio;
