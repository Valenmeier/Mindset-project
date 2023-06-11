import React from "react";
import { useState, useEffect } from "react";
import TitleSection from "../common/titleSection/TitleSection";
import styles from "./styles.module.css";
import CardProyects from "./cardsProyects/CardProyects";
const Proyects = () => {
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
      Descubre nuestros proyectos y observa como, a través de los datos, podemos
      potenciar tu negocio e impulsar el crecimiento
    </p>
  );
  return (
    <section id="proyectos">
      <TitleSection title={"Proyectos"} text={windowWidth >= 1000 ? text : ""} />
      <section className={styles.cardContainer}>
        <CardProyects
          texto={"Dosis administradas contra el COVID-19 en Perú"}
          imagen={"/images/ImagenProyecto1.webp"}
          link={
            "https://app.powerbi.com/view?r=eyJrIjoiMzhhMGVmMjItZGM2Mi00YmU5LTg5YzEtMmI4YzZhNmEwN2JkIiwidCI6Ijg4YmE0Y2MzLTdlMDItNDFiMC1hNjFjLWUwYmNmZmRkNmMwOSJ9&pageName=ReportSection"
          }
        />
        <CardProyects
          texto={"Reporte preliminar de daños a la región por lluvias"}
          imagen={"/images/ImagenProyecto2.webp"}
          link={
            "https://app.powerbi.com/view?r=eyJrIjoiMDk2OGUyMGItMjRkYS00MDNmLTkxNzEtZTczNTNhNGI4NTFiIiwidCI6Ijg4YmE0Y2MzLTdlMDItNDFiMC1hNjFjLWUwYmNmZmRkNmMwOSJ9&pageName=ReportSection09d5ee140b7405d51892"
          }
        />
        <CardProyects
          texto={"Comportamiento de ventas por región en Perú"}
          imagen={"/images/ImagenProyecto3.webp"}
          link={
            "https://app.powerbi.com/view?r=eyJrIjoiM2JiMTIxYTMtNjY3MS00ZDRlLWIzODAtMTE2YzM2NTRlM2IxIiwidCI6Ijg4YmE0Y2MzLTdlMDItNDFiMC1hNjFjLWUwYmNmZmRkNmMwOSJ9&pageName=ReportSection"
          }
        />
      </section>
    </section>
  );
};

export default Proyects;
