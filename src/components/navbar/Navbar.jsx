import styles from "./styles.module.css";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import DesktopNavbar from "./desktopNavbar/DesktopNavbar";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <MobileNavbar />
      <DesktopNavbar />
    </header>
  );
};

export default Navbar;
