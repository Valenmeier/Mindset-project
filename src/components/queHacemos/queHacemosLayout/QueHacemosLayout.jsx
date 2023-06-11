import { useState } from "react";
import styles from "./styles.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const QueHacemosLayout = ({
  icon,
  title,
  principalText,
  subtext,
  subsubtext,
  one,
  two,
  three,
}) => {
  let [sectionOpen, setSectionOpen] = useState(false);
  return (
    <section className={styles.layoutContainer}>
      <section className={styles.sectionContainer}>
        <section className={styles.iconContainer}>
          <div className={styles.contenedorImagen}>
            <img src={icon} alt={`${title}`} />
          </div>
          {title}
        </section>
        <section className={styles.cardContainer}>
          <section className={styles.textContainer}>
            <div>
              <p>{principalText}</p>
            </div>
            <div className={styles.plusMinus}>
              {!sectionOpen ? (
                <>
                  <FaPlus onClick={() => setSectionOpen(!sectionOpen)} />
                  <h2 onClick={() => setSectionOpen(!sectionOpen)}>Más</h2>
                </>
              ) : (
                <>
                  <FaMinus onClick={() => setSectionOpen(!sectionOpen)} />
                  <h2 onClick={() => setSectionOpen(!sectionOpen)}>Menos</h2>
                </>
              )}
            </div>
          </section>
        </section>
      </section>
      <section
        className={`${styles.sectionHidden} ${
          sectionOpen ? styles.sectionVisible : ""
        }`}
      >
        <section className={styles.subtitleSection}>
          <h3>{subtext}</h3>
          <h4>{subsubtext}</h4>
        </section>
        <section className={styles.oneTwoThreeSection}>
          <div className={styles.one}>
            <span>1</span>
            <p>{one}</p>
          </div>
          <div className={styles.two}>
            <span>2</span>
            <p>{two}</p>
          </div>
          <div className={styles.three}>
            <span>3</span>
            <p>{three}</p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default QueHacemosLayout;
