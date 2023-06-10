import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import MargenComponent from "../../common/MargenComponent/MargenComponent";
import { NavLink } from "react-router-dom";

const DesktopNavbar = () => {
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
          if (entry.isIntersecting) {
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

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

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
                currentSection === "quienesSomos" ? styles.activeLink : ""
              }
            >
              ¿Quiénes somos?
            </NavLink>
            <NavLink
              to={"/#queHacemos"}
              className={
                currentSection === "queHacemos" ? styles.activeLink : ""
              }
            >
              ¿Qué hacemos?
            </NavLink>
            <NavLink
              to={"/#metodologia"}
              className={
                currentSection === "metodologia" ? styles.activeLink : ""
              }
            >
              Metodología
            </NavLink>
            <NavLink
              to={"/#proyectos"}
              className={
                currentSection === "proyectos" ? styles.activeLink : ""
              }
            >
              Proyectos
            </NavLink>
            <NavLink
              to={"/articulos"}
              className={
                currentSection === "articulos" ? styles.activeLink : ""
              }
            >
              Artículos
            </NavLink>
            <NavLink
              to={"/#contacto"}
              className={currentSection === "contacto" ? styles.activeLink : ""}
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
