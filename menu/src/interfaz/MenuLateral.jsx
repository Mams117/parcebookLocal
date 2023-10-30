import { NavLink } from "react-router-dom";

const MenuLateral = () => {
  return (
    <>
      <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-dark">
        <div
          className="offcanvas-md offcanvas-end bg-body-tertiary"
          /*  tabindex="-1" */
          id="sidebarMenu"
          aria-labelledby="sidebarMenuLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="sidebarMenuLabel">
              Compañia XYZ
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#sidebarMenu"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink to="/" className="nav-link d-flex align-items-center gap-2 active" aria-current="page">
                  <i className="bi bi-house"></i>
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Clientes" className="nav-link d-flex align-items-center gap-2 active" aria-current="page">
                  <i className="bi bi-person-fill"> </i>
                  Clientes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Productos"
                  className="nav-link d-flex align-items-center gap-2 active"
                  aria-current="page"
                >
                  <i className="bi bi-box"></i>
                  Productos
                </NavLink>
              </li>
            </ul>
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
              <span>Reportes</span>
              <a className="link-secondary" href="#" aria-label="Add a new report">
                {/*   <svg className="bi">
                      <use xlink:href="#plus-circle" />
                    </svg> */}
              </a>
            </h6>
            <ul className="nav flex-column mb-auto">
              <li className="nav-item">
                <NavLink
                  to="/Productos"
                  className="nav-link d-flex align-items-center gap-2 active"
                  aria-current="page"
                >
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Productos"
                  className="nav-link d-flex align-items-center gap-2 active"
                  aria-current="page"
                >
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Productos"
                  className="nav-link d-flex align-items-center gap-2 active"
                  aria-current="page"
                >
                  Productos
                </NavLink>
              </li>
            </ul>
            <hr className="my-3" />
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
              <span>Otra Seccion</span>
              <a className="link-secondary" href="#" aria-label="Add a new report"></a>
            </h6>
            <ul className="nav flex-column mb-auto">
              <li className="nav-item">
                <NavLink
                  to="/Productos"
                  className="nav-link d-flex align-items-center gap-2 active"
                  aria-current="page"
                >
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Productos"
                  className="nav-link d-flex align-items-center gap-2 active"
                  aria-current="page"
                >
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Productos"
                  className="nav-link d-flex align-items-center gap-2 active"
                  aria-current="page"
                >
                  Productos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuLateral;
