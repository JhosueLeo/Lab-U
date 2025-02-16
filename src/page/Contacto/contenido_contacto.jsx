import React from "react";
import "../../css/style_contacto.css";
import "../../css/PreguntasFrecuentes.module.css";
import correo_img from "../../img/correo.svg";
import telefono_img from "../../img/telefono.svg";
import banner4 from '../../img/banner4.svg';

import proceso1 from "../../img/proceso1.svg";
import proceso2 from "../../img/proceso2.svg";
import proceso3 from "../../img/proceso3.svg";
import proceso4 from "../../img/proceso4.svg";
import linePreguntas from "../../img/lineapreguntas.svg";
import lineabajo from "../../img/flechabajo.svg";
import styles from "../../css/style_nosotros.module.css";
import PreguntasFrecuentes from "../../example";


function Contenido_contacto() {
  return (
    <body>
      {/*  */}
      {/*  
      <div className="ContenedorPrinci_Baner">
        <img src={banner4} className="baner" />
        <div className="Contenedor_Baner">
          <div className="Inicio_Contacto">
            <p className="Titulo1_Baner"><div className="Inicio_Baner">Inicio</div> / Contacto</p>
          </div>
          <div className="Citas_Contacto">
            <p className="Titulo2_Baner">Citas y <div className="Contacto_Banner">Contactos</div></p>
          </div>
        </div>
      </div>
       */}

      <div className="SeparadorHeader">
      </div>

      <div className="ContenedorPrinci_Baner">
        <div className="ContenedorContactoBaner1">
        <img src={banner4} className="baner" />
        </div>
       
        <div className="Contenedor_Baner">
          <div className="Inicio_Contacto">
            <p className="Titulo1_Baner"><div className="Inicio_Baner">Inicio </div> / Contacto</p>
          </div>
          <div className="Citas_Contacto">
            <p className="Titulo2_Baner">Citas y  <div className="Contacto_Banner"> Contactos</div></p>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="container_general">
        <div className="container_text">
          <h1 className="txt_ttl">
            ¡Estamos listos para <span className="txt_red">atenderte!</span>
          </h1>
          <p className="txt_p">
            Llame a nuestra oficina para comunicarse con nosotros
            o complete el formulario de contacto a continuación y
            nos comunicaremos con usted dentro de las 24 horas.
          </p>
          <div className="data-contacto">
            <div className="contact-1">
              <p>Contacto</p>
            </div>
            <div className="contact-3">
              <img className="img_t" src={telefono_img} alt="img_t" />
              <p>(01) 652 6328</p>
            </div>
            <div className="contact-2">
              <img className="img_c" src={correo_img} alt="img_c" />
              <p>contacto@lab-u.pe</p>
            </div>
          </div>
        </div>

        <div className="container_contacto">
          <h2>
            <b>¿ Como podemos ayudarte ?</b>
          </h2>
          <label className="txt-container-contacto" htmlFor="nomape">
            Nombre completo
          </label>
          <input
            className="input_enter"
            type="text"
            id="nomape"
            name="nomape"
            placeholder="Ingresa tu nombre completo"
            required
          />
          <label className="txt-container-contacto" htmlFor="correo">
            Correo
          </label>
          <input
            className="input_enter"
            type="text"
            id="correo"
            name="correo"
            placeholder="Ingresa tu correo"
            required
          />
          <label className="txt-container-contacto" htmlFor="telefono">
            Teléfono
          </label>
          <input
            className="input_enter"
            type="text"
            id="telefono"
            name="telefono"
            placeholder="Ingresa tu teléfono"
            required
          />
          <label className="txt-container-contacto" fhtmlForor="mensaje">
            Mensaje:
          </label>
          <textarea
            className="input_enter"
            type="message"
            id="mensaje"
            name="mensaje"
            placeholder="Escribe tu mensaje"
            required
          ></textarea>
          <div className="terminos-condiciones">
            <input
              className="txt_check"
              type="checkbox"
              id="terminos"
              name="terminos"
            />
            <label className="txt_tc" htmlFor="terminos">
              He leído y aceptado las condiciones establecidas en la clausula de
              protección de datos personales.
            </label>
          </div>
          <button className="btn_contacto" type="submit">
            Enviar
          </button>
        </div>
      </div>
      <div className="separador2">
      </div>
      <PreguntasFrecuentes />
      
      <div className="separador">
      </div>

      {/*seccion suscribete */}
      <div className="suscribete_fondo">
        <div class="container_suscribete">
          <h2>Suscríbete</h2>
          <p>Entérate de nuestras novedades</p>
          <div className="container_input_suscribete">
            <input placeholder="Correo Electrónico" type="email" name="email" />
            <button type="button" className="btn1_suscribete">Enviar</button>
          </div>
        </div>
      </div>
    </body>
  );
}
export default Contenido_contacto;
