import TitleSection from "../common/titleSection/TitleSection.jsx";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { LuMail } from "react-icons/lu";

export const Contacto = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let [label1, setLabel1] = useState(false);
  let [label2, setLabel2] = useState(false);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  let text = <p>Empecemos a crear tu estrategia empresarial</p>;



  return (
    <section id="contacto">
      <TitleSection title={"Contacto"} text={windowWidth >= 1000 ? text : ""} />
      <div className={styles.contactoSection}>
        <div className={styles.infoPersonal}>
          <div>
            <div className={styles.imagenClient}>
              <img
                src="./images/foto perfil clienta.webp"
                alt="Erika Vásquez Cuevas"
              />
            </div>
            <div className={styles.presentacionCliente}>
              <h1>Erika Vásquez Cuevas</h1>
              <h2>Directora de Inteligencia Comercial</h2>
              <h3>
                <span>
                  <LuMail />
                </span>
                mindset.analitica@gmail.com
              </h3>
            </div>
          </div>
          <p className={styles.infoDesktop}>
            Erika, Directora Comercial especializada en Business Intelligence,
            Analítica de Datos, Inteligencia Empresarial, Investigación de
            Mercados y Marketing, te ofrece su experiencia en consultoría
            inteligente. Impulsa tu negocio tomando decisiones estratégicas
            basadas en datos y maximiza tu rendimiento. Descubre cómo podemos
            colaborar para alcanzar tus objetivos.
          </p>
        </div>

        <form className={styles.form} name="contact" method="POST" data-netlify="true">
          <div className={styles.textSection}>
            <h3>¡Hablemos!</h3>
            <h4>
              Envianos tu duda o consulta, y nos pondremos en contacto a la
              brevedad.
            </h4>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.inputsForm}>
              <div>
                <label
                  htmlFor="nombre"
                  className={label1 ? styles.activeLabel : ""}
                >
                  Nombre
                </label>{" "}
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  onFocus={() => setLabel1(true)}
                  onBlur={() => setLabel1(false)}
                  placeholder="Ingresá tu nombre"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={label2 ? styles.activeLabel : ""}
                >
                  Email
                </label>{" "}
                <input
                  type="email"
                  id="email"
                  name="email"
                  onFocus={() => setLabel2(true)}
                  onBlur={() => setLabel2(false)}
                  placeholder="Ingresá tu correo electrónico"
                  required
                />
              </div>
            </div>
            <textarea
              name="mensaje"
              placeholder="Dejanos tu mensaje"
              cols="30"
              rows="10"
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </section>
  );
};
