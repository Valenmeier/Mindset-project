import React from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const GeneralLayout = () => {
  return (
    <section className={styles.contenedorGeneral}>
      <Navbar />
      <main className={styles.sectionsContainer}>
        <Outlet />
      </main>

      <footer className={styles.generalFooter}>Footer</footer>
    </section>
  );
};

export default GeneralLayout;
