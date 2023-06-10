import styles from "./styles.module.css";
import React from "react";

const CardProyects = ({ imagen, texto, link }) => {
  return (
    <section className={styles.cardContainer}>
      <img src={imagen} alt="cardImage" />

      <section>
        <p>{texto}</p>
        <a href={link} target="_blank">Ver</a>
      </section>
    </section>
  );
};

export default CardProyects;
