import React, { useState, useEffect } from "react";
import TitleSection from "../common/titleSection/TitleSection";
import styles from "./styles.module.css";
import MargenComponent from "../common/MargenComponent/MargenComponent";
import QueHacemosLayout from "./queHacemosLayout/QueHacemosLayout";
import MindsetAnalyticIcon from "../../assets/mindsetAnalitic.svg";
import MindsetIvestigaIcon from "../../assets/mindsetInvestiga.svg";
const QueHacemos = () => {
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
      Desarrollo de inteligencia empresarial para el diseño e identificación de
      estrategias comerciales y de marketing, usando analítica comercial y
      marketing analytic, mediante el análisis de datos e investigación profunda
      a tu negocio.
    </p>
  );
  let titleAnalytic = (
    <h3>
      Mindset
      <br />
      Analítica
    </h3>
  );

  let titleInvestiga = (
    <h3>
      Mindset
      <br />
      Investiga
    </h3>
  );
  return (
    <section id="queHacemos">
      <TitleSection
        title={"¿Qué hacemos?"}
        text={windowWidth >= 1000 ? text : ""}
      />
      <div className={styles.containSection}>
        <MargenComponent>
          <h3>Ofrecemos dos tipos de servicios</h3>
          <QueHacemosLayout
            icon={MindsetAnalyticIcon}
            title={titleAnalytic}
            principalText={
              "Impulsamos el crecimiento mediante la analítica de datos y diseño de estrategias comerciales inteligentes."
            }
            subtext={"Analítica: Proceso de trabajo"}
            subsubtext={"Inteligencia comercial aplicada a negocios"}
            one={"Detectamos pronósticos para el futuro de tu empresa."}
            two={"Decodificamos la realidad de tu empresa."}
            three={"Generamos estrategias basadas en inteligencia comercial."}
          />
          <QueHacemosLayout
            icon={MindsetIvestigaIcon}
            title={titleInvestiga}
            principalText={
              "Identificamos oportunidades de negocio mediante la investigación y análisis de sectores, empresas y consumidores."
            }
            subtext={"Investiga: Proceso de trabajo"}
            subsubtext={
              "Inteligencia de mercados aplicada a negocios y entornos."
            }
            one={
              "Detectamos tendencias y pronósticos futuros en los sectores relevantes para la empresa."
            }
            two={
              "Analizamos a las empresas competidoras, identificamos brechas y necesidades en el mercado."
            }
            three={
              "Investigamos y comprendemos las preferencias y necesidades de los consumidores"
            }
          />
        </MargenComponent>
        <div className={styles.imagenLayout}>
          <img src="/images/Que hacemos.png" alt="queHacemos" />
        </div>
      </div>
    </section>
  );
};

export default QueHacemos;
