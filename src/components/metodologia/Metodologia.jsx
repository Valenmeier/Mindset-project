import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import TitleSection from "../common/titleSection/TitleSection.jsx";
import MetodologiaMobilLayout from "./metodologiaMobil/metodologiaMobilLayout/MetodologiaMobilLayout.jsx";
import MetodologiaDesktop from "./metodologiaDesktop/MetodologiaDesktop.jsx";

const Metodologia = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  let text = (
    <p>
      Identificamos de manera exhaustiva las oportunidades y retos a los que se
      enfrenta la empresa, logrando canalizar los esfuerzos y recursos a
      proyectos y actividades que realmente aporten valor y generen sinergia
      para el crecimiento sostenible.
    </p>
  );
  return (
    <section id="metodologia" className={styles.metodologia}>
      <TitleSection
        title={"Metodología"}
        text={windowWidth >= 1000 ? text : ""}
      />
      <MetodologiaMobilLayout />
      <MetodologiaDesktop />
      <img src="/images/metodologiaImagen.webp" alt="metodologiaLayout" />
    </section>
  );
};

export default Metodologia;
