import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import MargenComponent from "../../common/MargenComponent/MargenComponent";
import { NavLink, useLocation } from "react-router-dom";

const DesktopNavbar = () => {
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const sections = [
      { id: "inicio", path: "/#inicio" },
      { id: "quienesSomos", path: "/#quienesSomos" },
      { id: "queHacemos", path: "/#queHacemos" },
      { id: "metodologia", path: "/#metodologia" },
      { id: "proyectos", path: "/#proyectos" },
      { id: "contacto", path: "/#contacto" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && location.pathname !== "/articulos") {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });
    console.log(location);
    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [location]);

  return (
    <section className={styles.desktopNavbar}>
      <MargenComponent>
        <nav>
          <NavLink to={"/#inicio"} className={styles.contenedorLogoInicio}>
            <img src="/images/logo-pc.png" alt="MindsetLogo" />
          </NavLink>
          <div className={styles.navMenuSection}>
            <NavLink
              to={"/#quienesSomos"}
              className={
                location.pathname !== "/articulos"
                  ? currentSection === "quienesSomos"
                    ? styles.activeLink
                    : ""
                  : ""
              }
            >
              ¿Quiénes somos?
            </NavLink>
            <NavLink
              to={"/#queHacemos"}
              className={
                location.pathname !== "/articulos"
                  ? currentSection === "queHacemos"
                    ? styles.activeLink
                    : ""
                  : ""
              }
            >
              ¿Qué hacemos?
            </NavLink>
            <NavLink
              to={"/#metodologia"}
              className={
                location.pathname !== "/articulos"
                  ? currentSection === "metodologia"
                    ? styles.activeLink
                    : ""
                  : ""
              }
            >
              Metodología
            </NavLink>
            <NavLink
              to={"/#proyectos"}
              className={
                location.pathname !== "/articulos"
                  ? currentSection === "proyectos"
                    ? styles.activeLink
                    : ""
                  : ""
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
                location.pathname !== "/articulos"
                  ? currentSection === "contacto"
                    ? styles.activeLink
                    : ""
                  : ""
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
