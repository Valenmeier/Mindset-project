import React from "react";
import styles from "./styles.module.css";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <h3>
        Síguenos en nuestras redes <br />
        sociales
      </h3>
      <section className={styles.redesSociales}>
        <a
          href="https://www.facebook.com/mindset.consultoria.inteligente?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook /> Mindset Consultoría
        </a>
        <a
          href="http://https://twitter.com/mindset_consul"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle /> @mindset_consul
        </a>

        <a
          href="https://instagram.com/mindset.consultora?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
          @mindset.consultora
        </a>
        <a
          href="https://www.youtube.com/channel/UCAQLLvNcMXcnGH5sJjPXmtg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsYoutube />
          Mindset consultoría
        </a>
      </section>
    </footer>
  );
};

export default Footer;
