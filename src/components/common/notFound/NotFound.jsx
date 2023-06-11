import { Link, useRouteError } from "react-router-dom";
import styles from "./styles.module.css"

const NotFound = () => {

  
  return (
    <div className={styles.notFoundContainer}>
      <img src="/images/LOGO-MOBILE.webp" alt="Logo Mindset"  />
      <h1>404</h1>
      <p>¡¡Esta página no se encuentra disponible!!</p>
      <Link to="/">Volver al home</Link>
    </div>
  );
};

export default NotFound;
