import React from "react";
import styles from "./styles.module.css";
import TitleSection from "../common/titleSection/TitleSection";
import MargenComponent from "../common/MargenComponent/MargenComponent";

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
          <img src="/images/quienesSomosMobile.png" alt="imagenQuienesSomos" />
        </div>
        <MargenComponent>
          <p>
            <b>
              Nuestra meta principal es ser aliados y socios estratégicos de
              nuestros clientes,
            </b>
            donde nuesto mayor interés es optimizar la toma de decisiones y el
            uso de sus recursos para lograr sus objetivos de manera eficiente.
          </p>
        </MargenComponent>
       
      </div>
    </section>
  );
};

export default QuienesSomos;
