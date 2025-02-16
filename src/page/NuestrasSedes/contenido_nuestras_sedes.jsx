import "./style_sedes.css";
import "../../css/theme.css";
import React from "react";
import flechita from "../../img/flecha-abajo.svg";
import Laboratorio from "./Laboratorio";
import Mapa from "./Mapa";
import styles from "../../css/style_sedes.module.css";

function Contenido_nosotros() {
  return (
    <div
      className={styles.contenedornuestrasede}
      style={{ border: "1px solid-black" }}
    >
      <h1 className={`${styles.titulo} flex w-full"`}>
        <b>Encuentra el sitio de tu elección</b>
      </h1>

      <div className={styles.contenedorradiobutton}>
        <div className="flex flex-row gap-3 justify-content-between w-full">
          <div className={styles.contenedor2}>
            <input type="radio" className={styles.RadioG1} />
            <label htmlFor="ingredient1" className="ml-2">
              Por Cercanía
            </label>
          </div>
          <div className={styles.contenedor2}>
            <input type="radio" className={styles.RadioG1} />
            <label htmlFor="ingredient1" className="ml-2">
              Alfabéticamente A a Z
            </label>
          </div>

          <div>
            <input
              type="text"
              className={styles.TextG1}
              placeholder="Encuentra la ubicación aquí"
            />
          </div>

          <div className={styles.selectcontainer}>
            <select
              name="campoConsulta"
              id="campoConsulta"
              className={styles.TextG1}
            >
              <option value="" disabled selected>
                Todos
              </option>
              <option value="nombre">Nombre</option>
              <option value="edad">Edad</option>
            </select>
            <img src={flechita} alt="flechita" className={styles.arrowicon} />
          </div>

          <div>
            <button className={styles.btnAplicar}>Aplicar</button>
          </div>
        </div>
      </div>

      <div
        className={`${styles.contenedordireccion} flex gap-3 w-full justify-content-center`}
      >
        <div>
          <Laboratorio />
        </div>

        <div>
          <Mapa />
        </div>
      </div>
    </div>
  );
}
export default Contenido_nosotros;
