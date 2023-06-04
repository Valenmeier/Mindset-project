import React from "react";
import styles from "./styles.module.css";
import { Element } from "react-scroll";

const Index = () => {
  return (
    <section className={styles.contenedorIndex}>
      <Element id="quienesSomos">¿Quiénes somos?</Element>
      <Element id="queHacemos">¿Qué hacemos?</Element>
      <Element id="metodologia">Metodología</Element>
      <Element id="proyectos">Proyectos</Element>
      <Element id="contacto">Contacto</Element>
    </section>
  );
};

export default Index;
