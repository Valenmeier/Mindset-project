import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Home from "../home/Home.jsx";
import QuienesSomos from "../quienesSomos/QuienesSomos.jsx";
import QueHacemos from "../queHacemos/QueHacemos.jsx";
import Metodologia from "../metodologia/Metodologia.jsx";
import Proyects from "../proyects/Proyects.jsx";
import { Contacto } from "../contactos/Contacto.jsx";

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

        window.scrollTo({ top: y });
      }
    }
  }, [location, ready]);

  return (
    <section className={styles.contenedorIndex}>
      <Home />
      <QuienesSomos />
      <QueHacemos />
      <Metodologia />
      <Proyects />
      <Contacto />
    </section>
  );
};

export default Index;
