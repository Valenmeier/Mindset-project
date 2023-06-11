import CirclesMetodologia from "../circlesMetodología/CirclesMetodologia.jsx";
import styles from "./styles.module.css";

const MetodologiaDesktop = () => {
  return (
    <section className={styles.metodologiaDesktop}>
      <section className={styles.parteSuperior}>
        <span></span>
        <CirclesMetodologia className={styles.circleModificado} number={2} />
        <span></span>
      </section>
      <section className={styles.parteInferior}>
        <div>
          <p>
            Mediante técnicas de insight, desarrollamos una investigación
            profunda de la realidad interna y externa de tu negocio
          </p>
          <CirclesMetodologia className={styles.circleModificado} number={1} />
        </div>
        <div>
          <p>
            Aplicación de herramientas estadísticas y de inteligencia de
            negocios para la analítica de datos en las áreas involucradas.
          </p>
        </div>
        <div>
          <p>
            Integramos los resultados de diagnósticos y análisis con los
            objetivos y necesidades de negocios.
          </p>
          <CirclesMetodologia className={styles.circleModificado} number={3} />
        </div>
      </section>
    </section>
  );
};

export default MetodologiaDesktop;
