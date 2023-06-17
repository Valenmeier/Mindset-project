import { Link, useRouteError } from "react-router-dom";
import styles from "./styles.module.css"

const NotFound = () => {

  
  return (
    <div className={styles.notFoundContainer}>
      <img src="https://res.cloudinary.com/meierdeveloper/image/upload/v1687023347/Mindset/LOGO-MOBILE_lfby4o.webp" alt="Logo Mindset"  />
      <h1>404</h1>
      <p>¡¡Esta página no se encuentra disponible!!</p>
      <Link to="/">Volver al home</Link>
    </div>
  );
};

export default NotFound;
