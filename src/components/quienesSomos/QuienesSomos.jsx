import React from "react";
import styles from "./styles.module.css";
import TitleSection from "../common/titleSection/TitleSection.jsx";
import MargenComponent from "../common/MargenComponent/MargenComponent.jsx";

const QuienesSomos = () => {
  let text = (
    <p>
      <b>Agencia consultora</b>, enfocada en identificar estrategias comerciales
      basadas en datos.
    </p>
  );
  return (
    <section id="quienesSomos">
      <TitleSection title={"¿Quiénes somos?"} text={text} />
      <div className={styles.layout}>
        <div className={styles.imageContainer}>
          <img src="/images/quienesSomosMobile.webp" alt="imagenQuienesSomos" />
        </div>
        <MargenComponent>
          <p>
            <b>
              Nuestra meta principal es ser aliados y socios estratégicos de
              nuestros clientes, 
            </b>
            donde nuestro mayor interés es optimizar la toma de decisiones y el
            uso de sus recursos para lograr sus objetivos de manera eficiente.
          </p>
        </MargenComponent>
       
      </div>
    </section>
  );
};

export default QuienesSomos;
