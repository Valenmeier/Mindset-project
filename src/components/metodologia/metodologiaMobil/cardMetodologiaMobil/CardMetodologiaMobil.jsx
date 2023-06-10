import CirclesMetodologia from "../../circlesMetodología/CirclesMetodologia";
import styles from "./styles.module.css";
const CardMetodologiaMobil = ({ number, text }) => {
  return (
    <section className={styles.cardMobilContainer}>
      <CirclesMetodologia number={number} />
      <p>{text}</p>
    </section>
  );
};

export default CardMetodologiaMobil;
