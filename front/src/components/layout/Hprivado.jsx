import { NavLink } from "react-router-dom";

const Hprivado = () => {
  return (
    <>
      <nav className="layout__navbar">
        <header className="navbar__header">
          <NavLink to="/" className="navbar__title">
            ParceBook
          </NavLink>
        </header>

        <div className="navbar__container-lists">
          <ul className="container-lists__menu-list">
            <li className="menu-list__item">
              <NavLink to="/" className="menu-list__link">
                <i className="fa-solid fa-house"></i>
                <span className="menu-list__title">Inicio</span>
              </NavLink>
            </li>

            <li className="menu-list__item">
              <NavLink to="/Acerca" className="menu-list__link">
                <i className="fa-solid fa-list"></i>
                <span className="menu-list__title">Publicaciones</span>
              </NavLink>
            </li>

            <li className="menu-list__item">
              <NavLink to="/Contacto" className="menu-list__link">
                <i className="fa-solid fa-user"></i>
                <span className="menu-list__title">Gente</span>
              </NavLink>
            </li>

            <li className="menu-list__item">
              <a href="#" className="menu-list__link">
                <i className="fa-regular fa-envelope"></i>
                <span className="menu-list__title">Mensajes</span>
              </a>
            </li>
            <li className="menu-list__item">
              <NavLink to="/Registro" className="menu-list__link">
                <i class="fa-solid fa-user-plus"></i>
                <span className="menu-list__title">Registrarse</span>
              </NavLink>
            </li>
          </ul>

          <ul className="container-lists__list-end">
            <li className="list-end__item">
              <a href="#" className="list-end__link-image">
                <img src="assets/img/user.png" className="list-end__img" alt="Imagen de perfil" />
              </a>
            </li>
            <li className="list-end__item">
              <a href="#" className="list-end__link">
                <span className="list-end__name">Juan </span>
                <i className="fa-solid fa-caret-down"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Hprivado;
