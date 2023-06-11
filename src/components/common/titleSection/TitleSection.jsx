import MargenComponent from "../MargenComponent/MargenComponent.jsx";
import styles from "./styles.module.css";

const TitleSection = ({ title, text }) => {
  return (
    <section className={styles.titleSection}>
      <MargenComponent>
        <div className={styles.textSection}>
          <h3>{title}</h3>
          {text ? <>{text}</> : ""}
        </div>
      </MargenComponent>
    </section>
  );
};

export default TitleSection;
