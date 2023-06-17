import React from "react";
import MargenComponent from "../../common/MargenComponent/MargenComponent.jsx";
import { MdMenu } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { useLocation, NavLink } from "react-router-dom";
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
            className={
              currentSection === "#quienesSomos" ? styles.activeLink : ""
            }
            onClick={changeMenu}
          >
            ¿Quiénes somos?
          </NavLink>
          <NavLink
            to={"/#queHacemos"}
            className={
              currentSection === "#queHacemos" ? styles.activeLink : ""
            }
            onClick={changeMenu}
          >
            ¿Qué hacemos?
          </NavLink>
          <NavLink
            to={"/#metodologia"}
            className={
              currentSection === "#metodologia" ? styles.activeLink : ""
            }
            onClick={changeMenu}
          >
            Metodología
          </NavLink>
          <NavLink
            to={"/#proyectos"}
            className={currentSection === "#proyectos" ? styles.activeLink : ""}
            onClick={changeMenu}
          >
            Proyectos
          </NavLink>
          <NavLink
            to={"/articulos"}
            className={
              location.pathname === "/articulos" ? styles.activeLink : ""
            }
            onClick={changeMenu}
          >
            Artículos
          </NavLink>
          <NavLink
            to={"/#contacto"}
            className={currentSection === "#contacto" ? styles.activeLink : ""}
            onClick={changeMenu}
          >
            Contacto
          </NavLink>
        </div>
        <div className={styles.imageNavbar}>
          <img src="https://res.cloudinary.com/meierdeveloper/image/upload/v1687023347/Mindset/LOGO-MOBILE_lfby4o.webp" alt="logoMindset" />
        </div>
      </nav>
      <MargenComponent>
        <div className={styles.navComponents}>
          <NavLink to={"/#inicio"}>
            <img
              src="https://res.cloudinary.com/meierdeveloper/image/upload/v1687023347/Mindset/LOGO-MOBILE_lfby4o.webp"
              className={openMenu ? styles.desaparecer : ""}
              alt="logoMindset"
            />
          </NavLink>
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
