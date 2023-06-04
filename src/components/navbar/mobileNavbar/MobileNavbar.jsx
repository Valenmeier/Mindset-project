import React from "react";
import MargenComponent from "../../common/MargenComponent/MargenComponent.jsx";
import { MdMenu } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { NavHashLink as NavLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";

const MobileNavbar = () => {
  const location = useLocation();
  let currentSection = location.hash;
  let [openMenu, setOpenMenu] = useState(false);

  let changeMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <section className={styles.mobileMenuContainer}>
      <nav
        className={`${styles.navegacion}  ${
          openMenu ? styles.navegacionOpen : ""
        }`}
      >
        <CgClose className={styles.cruzCierre} onClick={changeMenu} />
        <div className={styles.navMenuSection}>
          <NavLink
            to={"/#quienesSomos"}
            smooth
            className={
              currentSection === "#quienesSomos" ? styles.activeLink : ""
            }
          >
            ¿Quiénes somos?
          </NavLink>
          <NavLink
            to={"/#queHacemos"}
            smooth
            className={
              currentSection === "#queHacemos" ? styles.activeLink : ""
            }
          >
            ¿Qué hacemos?
          </NavLink>
          <NavLink
            to={"/#metodologia"}
            smooth
            className={
              currentSection === "#metodologia" ? styles.activeLink : ""
            }
          >
            Metodología
          </NavLink>
          <NavLink
            to={"/#proyectos"}
            smooth
            className={currentSection === "#proyectos" ? styles.activeLink : ""}
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
            smooth
            className={currentSection === "#contacto" ? styles.activeLink : ""}
          >
            Contacto
          </NavLink>
        </div>
        <div className={styles.imageNavbar}>
          {" "}
          <img src="/images/LOGO-MOBILE.png" alt="logoMindset" />
        </div>
      </nav>
      <MargenComponent>
        <div className={styles.navComponents}>
          <img
            src="/images/LOGO-MOBILE.png"
            className={openMenu ? styles.desaparecer : ""}
            alt="logoMindset"
          />
          <MdMenu
            className={openMenu ? styles.desaparecer : ""}
            onClick={changeMenu}
          />
        </div>
      </MargenComponent>
    </section>
  );
};

export default MobileNavbar;
