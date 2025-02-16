import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import icon_mensaje from "../../img/icon_mensaje.svg";
import styles from "../../css/Resultado.module.css";
import AuthUser from "../../AuthUser";
import { Toast } from "primereact/toast";

function Resultados() {

  const { http, setToken } = AuthUser();
  const navigate = useNavigate();
  const toast = useRef(null);
  const [usuario, setUsuario] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }

  const showToast = (tipo, titulo, detalle) => {
    toast.current.show({
      severity: tipo,
      summary: titulo,
      detail: detalle,
      life: 3000,
    });
  };

  const handleSubmit = () => {

    console.log("usaurio", usuario);

    console.log("entro login", usuario);
    http.post(`/login-particular`, usuario)
      .then((response) => {
        setToken(response.data.token, response.data.persona_id);
        let url = "/table"
        navigate(url);
        showToast(
          "success",
          "Ingreso correctamente",
          "Bienvenido"
        );
      })
      .catch((error) => {
        console.log(error.response.data.error)
        showToast(
          "error",
          "Error al ingresar",
          "Intente nuevamente o póngase en contacto con soporte"
        );
      });
  };


  return (
    <div>
      <Toast ref={toast} />
      <div className="SeparadorHeader">
      </div>
      <div className={styles.containerGeneral}>
        <div className={styles.containerText}>
          <h1 className={styles.txtTtl}>
            Bienvenido a{" "}
            <span className={styles.txtRed}>Resultados en Línea</span>
          </h1>
          <p className={styles.txtp}>
            En esta sección usted tendrá acceso a los resultados de los análisis
            que se realizó en nuestro laboratorio. <br />
            Si Ud. no tiene un Usuario y Contraseña solicítelo llamando a
            nuestra central telefónica (511) 652 63289, las credenciales serán
            enviadas al correo electrónico registrado en nuestra base de datos.
          </p>
          <div className={styles.containerMensaje}>
            <img
              className={styles.imgMensaje}
              src={icon_mensaje}
              alt="icon_mensaje"
              width="100"
              height="100"
            />


            <div className={styles.txtMensaje}>
              <p>
                Si necesita ayuda para ingresar, contacteahora con nuestro Laboratorio.{" "}
                <span className={styles.txtCarlosServicio}>Carlos /Servicio</span>
              </p>
            </div>


          </div>
        </div>

        <div className={styles.containerLogin}>
          <label className={styles.txtLoginRequest} htmlFor="username">
            Usuario (O código de recojo)
          </label>
          <input
            className={styles.inputEnter}
            type="text"
            id="username"
            name="username"
            placeholder="Escribe aquí"
            value={usuario.username}
            onChange={handleChange}
            required
          />
          <label className={styles.txtLoginRequest} htmlFor="password">
            Contraseña (O código de recojo)
          </label>
          <input
            className={styles.inputEnter}
            type="password"
            id="password"
            name="password"
            placeholder="Escribe aquí"
            value={usuario.password}
            onChange={handleChange}
            required
          />
          <div>
            <input
              className={styles.txtCheck}
              type="checkbox"
              id="terminos"
              name="terminos"
            />
            <label className={styles.txtTc} htmlFor="terminos">
              Términos y Condiciones
            </label>
          </div>
          <div className={styles.clase1}>
            <label className={styles.txtCl} htmlFor="clausula">
              Cláusula informativa de{" "}
              <span className={styles.txtCarlosServicio}>protección de datos personales.</span>
            </label>
          </div>
          <div>
            <p className={styles.txtDt}>
              He leído y acepto el tratamiento de mis datos personales para
              finalidades adicionales.
            </p>
            <input
              className={styles.checkOpt}
              type="radio"
              id="tratamientoSi"
              name="tratamiento"
              value="si"
            />
            <label htmlFor="tratamientoSi">Sí</label>
            <input
              className={styles.checkOpt}
              type="radio"
              id="tratamientoNo"
              name="tratamiento"
              value="no"
            />
            <label htmlFor="tratamientoNo">No</label>
          </div>

          <button onClick={handleSubmit} className={styles.btnLogin} >
            <span>Ingresar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Resultados;
