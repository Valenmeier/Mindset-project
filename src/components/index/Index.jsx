import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Inicio } from "../inicio/inicio";
import QuienesSomos from "../quienesSomos/QuienesSomos";
import QueHacemos from "../queHacemos/QueHacemos";
import Metodologia from "../metodologia/Metodologia";
import Proyects from "../proyects/Proyects";
import { Contacto } from "../contactos/Contacto";

const Index = () => {
  const location = useLocation();
  const [ready, setReady] = useState(false);

  const isMobileView = () => {
    return window.innerWidth <= 1000; 
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setReady(true);
    } else {
      window.onpopstate = () => {
        setReady(true);
      };
    }
  }, [location.pathname]);

  useEffect(() => {
    const elementId = location.hash.substring(1);
    if (elementId && ready) {
      let section = document.getElementById(elementId);
      if (section) {
        // Ajusta el offset dependiendo de si es vista móvil o de escritorio
        const yOffset = isMobileView() ? -65 : -100;
        const y =
          section.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location, ready]);

  return (
    <section className={styles.contenedorIndex}>
      <Inicio />
      <QuienesSomos />
      <QueHacemos />
      <Metodologia />
      <Proyects />
      <Contacto />
    </section>
  );
};

export default Index;
