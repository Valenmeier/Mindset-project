import React from "react";
import styles from "./styles.module.css";
import MargenComponent from "../../common/MargenComponent/MargenComponent";
import { useLocation, NavLink } from "react-router-dom";
import { Link } from "react-scroll";
const DesktopNavbar = () => {
  const location = useLocation();
  let currentSection = location.hash;
  return (
    <section className={styles.desktopNavbar}>
      <MargenComponent>
        <nav>
          <img src="/images/logo-pc.png" alt="MindsetLogo" />
          <div className={styles.navMenuSection}>
            <NavLink
              to={"/#quienesSomos"}
              className={
                currentSection === "#quienesSomos" ? styles.activeLink : ""
              }
            >
              ¿Quiénes somos?
            </NavLink>
            <NavLink
              to={"/#queHacemos"}
              className={
                currentSection === "#queHacemos" ? styles.activeLink : ""
              }
            >
              ¿Qué hacemos?
            </NavLink>
            <NavLink
              to={"/#metodologia"}
              className={
                currentSection === "#metodologia" ? styles.activeLink : ""
              }
            >
              Metodología
            </NavLink>
            <NavLink
              to={"/#proyectos"}
              className={
                currentSection === "#proyectos" ? styles.activeLink : ""
              }
            >
              Proyectos
            </NavLink>
            <NavLink
              to={"/articulos"}
              className={
                location.pathname === "/articulos" ? styles.activeLink : ""
              }
            >
              Artículos
            </NavLink>
            <NavLink
              to={"/#contacto"}
              className={
                currentSection === "#contacto" ? styles.activeLink : ""
              }
            >
              Contacto
            </NavLink>
          </div>
        </nav>
      </MargenComponent>
    </section>
  );
};

export default DesktopNavbar;
