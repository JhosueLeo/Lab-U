import React from "react";
import styles from "../../css/lista-examenes.module.css";
import fondolista from "../../img/fondolista.svg";
import TablaLista_examenes_page from "./TablaListadeAnalisis.jsx";
export default function Lista_examenes_page() {
  return (
    <>
    <div className="SeparadorHeader">
      </div>
      <div className={styles.container}>
        <div className={ styles.container_img }>
          <img
            className={styles.backgroundImage}
            src={fondolista}
            alt="FondoLista"
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.heading} style={{ marginBottom: "35px" }}>
            <b>Listado de análisis disponibles</b>
          </h1>
          <p className={styles.subtext}>Una variedad de más de 0000 análisis</p>
        </div>
      </div>
      <div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center",flexDirection:"column",alignItems:"center" }}
        >
          <h1 className={styles.textTitulo1}>
            <b>Localizar por tipo de análisis</b>
          </h1>
          <TablaLista_examenes_page />
        </div>
      </div>
    </>
  );
}
