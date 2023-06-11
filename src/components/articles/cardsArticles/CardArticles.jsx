import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const CardArticles = ({ imagen, title, texto, titlePopup, textoPopup }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    if (isPopupOpen) {
      setScrollPos(window.scrollY);
      document.body.classList.add("bodyNoScroll");
    } else {
      document.body.classList.remove("bodyNoScroll");
      window.scrollTo(0, scrollPos);
    }
  }, [isPopupOpen]);

  return (
    <>
      <section className={styles.cardContainer}>
        <img src={imagen} alt="cardImage" />
        <section>
          <h3 className={styles.titleCard}>{title}</h3>
          <p>{texto}</p>
          <span onClick={() => setIsPopupOpen(true)}>Leer más</span>
        </section>
      </section>
      {isPopupOpen && (
        <section className={styles.popUpContainer}>
          <span
            onClick={() => setIsPopupOpen(false)}
            className={styles.capaPopUp}
          ></span>
          <div className={styles.popUp}>
            <img src={imagen} alt="cardImage" />
            <h3>{titlePopup}</h3>
            <p>{textoPopup}</p>
            <h4 onClick={() => setIsPopupOpen(false)}>X</h4>
          </div>
        </section>
      )}
    </>
  );
};

export default CardArticles;
