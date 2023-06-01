import { useState } from "react";
import MargenComponent from "../common/MargenComponent/MargenComponent";
import styles from "./styles.module.css";
import { MdMenu } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [openMenu, setOpenMenu] = useState(false);

  let changeMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className={styles.header}>
      <nav
        className={`${styles.navegacion} ${
          openMenu ? styles.navegacionOpen : ""
        }`}
      >
        <CgClose className={styles.cruzCierre} onClick={changeMenu} />
        <div className={styles.navMenuSection}>
          <Link to={"#"}>¿Quiénes somos?</Link>
          <Link to={"#"}>¿Qué hacemos?</Link>
          <Link to={"#"}>¿Cómo lo hacemos?</Link>
          <Link to={"#"}>Clientes/Proyectos</Link>
          <Link to={"#"}>Articulos</Link>
          <Link to={"#"}>Contacto</Link>
        </div>
        <div className={styles.imageNavbar}>
          {" "}
          <img src="/images/LOGO-MOBILE.png" alt="logoMindset" />
        </div>
      </nav>
      <MargenComponent>
        <div className={styles.navComponents}>
          <img
            src="/images/LOGO-MOBILE.png"
            className={openMenu ? styles.desaparecer : ""}
            alt="logoMindset"
          />
          <MdMenu
            className={openMenu ? styles.desaparecer : ""}
            onClick={changeMenu}
          />
        </div>
      </MargenComponent>
    </header>
  );
};

export default Navbar;
