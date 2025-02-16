import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../css/Footer.module.css";
import labuimagen from "../img/logolabuU.svg";
import numeroimagen from "../img/telefono.svg";
import emailimagen from "../img/email.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className={styles.footer}>
      <hr />
      <div className={styles.links}>
          <img className={styles.LabU2} src={labuimagen} alt="Lab-U" /> 
      
        <div className={styles.navigationLinks}>
          <ul>
            <p>Lista de Exámenes</p>
            <li><a href="#">Hemograma</a></li>
            <li><a href="#">Descarte de VPH</a></li>
            <Link to="/lista_examenes" onClick={scrollToTop}>Ver más..</Link>
          </ul>

          <ul>
            <p>Acerca de Nosotros</p>
            <Link to="/acercadenosotros"onClick={scrollToTop}>¿Quiénes somos?</Link>
          </ul>

          <ul>
            <p>Sedes</p>
            <li><a href="#" translate='no'>Ate</a></li>
            <li><a href="#">Callao</a></li>
            <li><a href="#">Comas</a></li>
            <Link to="/sede" onClick={scrollToTop}>Ver más..</Link>
          </ul>

          <ul >
            <p>Contacto</p>
            <li className={styles.contactListItem}>
              <img className={styles.LabU2} src={numeroimagen} alt="Lab-U" />
              <a href="#">               
                +51 908 815 833
              </a>
            </li>
            <li className={styles.contactListItem}>
              <img className={styles.LabU2} src={emailimagen} alt="Lab-U" />
              <a href="#">
                contacto@lab-u.pe
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.info2}>
          <p>Términos y condiciones</p>
          <p>Políticas de privacidad</p>
          <p>Resultados</p>
        </div>
        <div className={styles.info3}>
        <p>©Lab-u - Todos los derechos reservados.</p></div>
      </div>
    </div>
  );
}

export default Footer;