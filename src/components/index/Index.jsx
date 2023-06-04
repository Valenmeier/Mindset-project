import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Index = () => {
  const location = useLocation();
  const [ready, setReady] = useState(false);

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
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [location, ready]);

  return (
    <section className={styles.contenedorIndex}>
      <div id="quienesSomos">¿Quiénes somos?</div>
      <div id="queHacemos">¿Qué hacemos?</div>
      <div id="metodologia">Metodología</div>
      <div id="proyectos">Proyectos</div>
      <div id="contacto">Contacto</div>
    </section>
  );
};

export default Index;
