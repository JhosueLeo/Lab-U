import React from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import styles from "../../css/Resultado.module.css";

const DialogCrear = ({ visibleCrear, setVisibleCrear }) => {

  return (
    <Dialog visible={visibleCrear} onHide={() => setVisibleCrear(false)}>
      <h1 style={{ textAlign:'center', color: 'black', fontSize: '35px', fontWeight: 'bold' }}>
        Agrega un análisis
      </h1>
      <div className={styles.containerLogin}>
        <label
          style={{ color: 'black' }} className={styles.txtLoginRequest} htmlFor="id">
          Id
        </label>
        <InputText id="id" aria-describedby="id-help" className={styles.inputEnter} />

        <label
          style={{ color: 'black' }} className={styles.txtLoginRequest} htmlFor="nombre">
          Nombre
        </label>
        <InputText id="nombre" aria-describedby="nombre-help" className={styles.inputEnter} />

        <label className={styles.txtLoginRequest}
          style={{ color: 'black' }} htmlFor="comentario">
          Comentario
        </label>
        <InputText id="comentario" aria-describedby="comentario-help" className={styles.inputEnter} />

        <Button label="Crear" className={styles.btnLogin} />
      </div>
    </Dialog>
  );
};

export default DialogCrear;
