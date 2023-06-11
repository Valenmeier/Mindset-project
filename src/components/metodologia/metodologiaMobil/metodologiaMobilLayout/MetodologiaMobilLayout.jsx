import React from "react";
import styles from "./styles.module.css";
import CardMetodologiaMobil from "../cardMetodologiaMobil/CardMetodologiaMobil.jsx";


const MetodologiaMobilLayout = () => {
  return (
    <section className={styles.sectionContainer}>
      <CardMetodologiaMobil
        number={1}
        text={
          "Mediante técnicas de insight, desarrollamos una investigación profunda de la realidad interna y externa de tu negocio"
        }
      />
      <CardMetodologiaMobil
        number={2}
        text={
          "Aplicación de herramientas estadísticas y de inteligencia de negocios para la analítica de datos en las áreas involucradas."
        }
      />
      <CardMetodologiaMobil
        number={3}
        text={
          "Integramos los resultados de diagnósticos y análisis con los objetivos y necesidades de negocios."
        }
      />
    </section>
  );
};

export default MetodologiaMobilLayout;
