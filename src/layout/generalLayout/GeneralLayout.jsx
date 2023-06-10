import React from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const GeneralLayout = () => {
  return (
    <section className={styles.contenedorGeneral}>
      <Navbar />
      <main className={styles.sectionsContainer}>
        <Outlet />
      </main>

      <Footer/>
    </section>
  );
};

export default GeneralLayout;
