import styles from "./styles.module.css";
import MobileNavbar from "./mobileNavbar/MobileNavbar.jsx";
import DesktopNavbar from "./desktopNavbar/DesktopNavbar.jsx";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <MobileNavbar />
      <DesktopNavbar />
    </header>
  );
};

export default Navbar;
