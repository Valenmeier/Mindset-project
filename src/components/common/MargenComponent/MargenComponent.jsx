import styles from "./styles.module.css";

const MargenComponent = ({ children }) => {
  return (
    <section className={styles.margenComponent}>
      <div className={styles.margenContainer}>{children}</div>
    </section>
  );
};

export default MargenComponent;
