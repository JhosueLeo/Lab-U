import covidimagen from "../../img/imagencovid.svg";
import analisismuestra from "../../img/analisisuno.svg";
import confiables from "../../img/confiables.svg";
import confidencialidad from "../../img/confidencialidad.svg";
import precisioninterpretacion from "../../img/precisioninterpretacion.svg";
import acercanosotros from "../../img/acercanosotrosimg.svg";
import microuno from "../../img/microscopio.svg";
import certificadoiso9001 from "../../img/certificacioniso9001.svg";
import certificadoiso14001 from "../../img/certificacioniso14001.svg";
import certificadoiso37001 from "../../img/certificacioniso37001.svg";
import certificadoiso45001 from "../../img/certificacioniso45001.svg";
import certificadoiso27001 from "../../img/certificacioniso27001.svg";
import watsapp from "../../img/whats_2.svg";
import correo_img from "../../img/correo.svg";
import telefono_img from "../../img/telefono.svg";
import esquema_img from "../../img/mapa_pag.svg";
import Slider from "react-slick";
import "../../css/deco-contenido.css";
import WatsonChat from '../../WatsonChat'; // 👈 Importa el chatbot

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
        <WatsonChat />  {/* 👈 Agrega el chatbot aquí */}
    </BrowserRouter>
);

function Contenido() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="analisis-clinico">
        <img className="imagenuno" src={covidimagen} alt="" />
        <div className="container-texto-analisis">
          <h2 className="texto-superpuesto">
            Innovación y Precisión en Análisis Clínicos
          </h2>
          <p className="texto-bajo">
            En LAB-U, nos dedicamos a ofrecer análisis clínicos precisos y
            confiables. Con tecnología avanzada y un equipo profesional,
            garantizamos servicios de alta calidad para su salud y bienestar.
            Descubra la diferencia que hace LAB-U en el cuidado de su salud.
          </p>
          <button
            className="bttn"
            onClick={() =>
              window.open(
                "https://calendly.com/aguirreandrea457/citas-medicas",
                "_blank"
              )
            }
          >
            Reserva tu cita
          </button>
        </div>
      </div>
      <div className="textos">
        <div className="textouno">
          <p className="consulta-resultados">Consulta tus resultados</p>
        </div>
        <p className="textodos">
          Mediante la secuenciación de tu genoma, determinamos la composición
          genética completa de tu organismo o célula, especialmente para
          encontrar cambios en tu ADN. Este estudio nos ayuda a los científicos
          a pronosticar qué enfermedades puedes desarrollar.
        </p>
      </div>
      <div className="button-container">
        <button className="bttn2">Consulta tu resultado aquí</button>
      </div>
      <Slider {...settings}>
        <div>
          <div className="textoconimagen">
            <img className="imagendos" src={analisismuestra} alt="" />
            <div className="textocolorfondo">
              <h2 className="h2color">Listado de exámenes</h2>
              <p className="pcolor">
                Usamos la Novaseq X Series, una nueva tecnología coreana que
                permite niveles más altos de precisión a gran escala, con la
                capacidad de secuenciar más de 20.000 genomas al año que causan
                el 95% de enfermedades genéticas.
              </p>
              <div className="container-consulta">
                <button className="bttn-consulta">Nuestros examenes</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="textoconimagen">
            <img className="imagendos" src={esquema_img} alt="" />
            <div className="textocolorfondo">
              <h2 className="h2color">Nuestras sedes</h2>
              <p className="pcolor">
                En LAB-U, estamos cerca de ti con varias ubicaciones
                estratégicamente situadas para tu comodidad y facilidad de
                acceso. Cada una de nuestras sedes está equipada con la más
                avanzada tecnología y personal altamente calificado, listos para
                brindarte el mejor servicio en análisis clínicos. Encuentra tu
                sede más cercana y experimenta la calidad y eficiencia de LAB-U
                en cada visita.
              </p>
              <div className="container-consulta">
                <button className="bttn-consulta">Visítanos</button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className="eleccion">
        <p className="porqueeleccion">¿Por qué elegirnos?</p>
        <p className="textotres">
          Somos un laboratorio molecular creado con la misión de mejorar la
          salud de las personas con ética y pasión. Formamos parte del grupo
          Medical Roma, asociación empresarial con más de 10 años en el sector
          salud. Nuestra visión es llegar al 2026 siendo el laboratorio
          referente en la industria por su confiabilidad y calidad certificada.
        </p>
      </div>
      <div className="seccion-imagenes">
        <div className="elemento">
          <img src={confidencialidad} alt="confidencial" />
          <h3 className="seccion-titulo">CONFIDENCIALIDAD Y PRIVACIDAD</h3>
          <p className="seccion-eleccion">
            Respetamos la confidencialidad y la privacidad de los datos
            genéticos de nuestros clientes, garantizando la seguridad de la
            información en todo momento.
          </p>
        </div>
        <hr className="linea" />
        <div className="elemento">
          <img src={precisioninterpretacion} alt="preint" />
          <h3 className="seccion-titulo">PRECISIÓN EN LA INTERPRETACIÓN</h3>
          <p className="seccion-eleccion">
            Nuestro equipo de expertos está altamente capacitado en la
            interpretación de datos genómicos y ofrece análisis precisos y
            detallados para comprender las implicaciones clínicas de las
            variantes genéticas.
          </p>
        </div>
        <hr className="linea" />
        <div className="elemento">
          <img src={confiables} alt="confiables" />
          <h3 className="seccion-titulo">RESULTADOS CONFIABLES</h3>
          <p className="seccion-eleccion">
            Nuestros análisis genómicos son rigurosos y cumplen con altos
            estándares de calidad, lo que garantiza resultados confiables y
            precisos.
          </p>
        </div>
      </div>
      <div className="contenedormicroscopio">
        <img className="recipiente" src={acercanosotros} alt="" />
        <button className="acercanosotrosbtn">Acerca de Nosotros</button>
        <div className="quienessomos">
          <h3 className="quienesh3">¿Quiénes somos?</h3>
          <p className="parrafoquienessomos">
            Somos Genea, laboratorio molecular creado con la misión de mejorar
            la salud de las personas conética y pasión.
          </p>
          <img className="microscopiouno" src={microuno} alt="" />
          <button className="vermasbtn">Ver más</button>
        </div>
      </div>
      <div className="containercertificados">
        <h3 className="nuestrascertificacionesh3">Nuestras Certificaciones</h3>
        <p className="parrafocertificaciones">
          Somos un laboratorio molecular dedicado a realizar pruebas genéticas
          en el Perú. Contamos con 5 certificaciones internacionales que
          garantizan la transparencia y objetividad para ejecutar correctamente
          los procesos en todas las etapas.
        </p>
      </div>
      <div className="certificadosisoimagen">
        <div className="certificadosiso9001">
          <img src={certificadoiso9001} style={{ width: "300px" }} alt="" />
          <img src={certificadoiso14001} style={{ width: "320px" }} alt="" />
          <img src={certificadoiso45001} style={{ width: "330px" }} alt="" />
        </div>
        <div className="certificadosiso27001">
          <img src={certificadoiso27001} style={{ width: "320px" }} alt="" />
          <img src={certificadoiso37001} style={{ width: "320px" }} alt="" />
        </div>
      </div>

      <div className="container_general_principal">
        <div className="container_text_principal">
          <h1 className="txt_ttl_principal">
            ¡Estamos listos para{" "}
            <span className="txt_red_principal">atenderte!</span>
          </h1>
          <p className="txt_p_principal">
            Nuestra máxima prioridad es brindar un excelente
            serviciopersonalizado a nuestros clientes.Estamos disponibles por
            teléfono o correo electrónico de lunes a viernes de 9:00 a. m. a
            6:00 p. m.
          </p>
          <div className="data_contacto_principal">
            <div className="contact-1_principal">
              <img className="img_w" src={watsapp} alt="img_w" />
              <p>+51 970 553 183</p>
            </div>
            <div className="contact-2_principal">
              <img className="img_c" src={correo_img} alt="img_c" />
              <p>contacto@lab-u.pe</p>
            </div>
            <div className="contact-3_principal">
              <img className="img_t" src={telefono_img} alt="img_t" />
              <p>(01) 652 6328</p>
            </div>
            <p className="consejo_principal">
              Llena el formulario y nuestro equipo respondera a la brevedad.
            </p>
          </div>
        </div>

        <div className="container_contacto_principal">
          <h2>
            <b>Déjanos tu mensaje</b>
          </h2>
          <label className="txt_container_contacto_principal" htmlFor="nomape">
            Nombre y Apellido:
          </label>
          <input
            className="input_enter_principal"
            type="text"
            id="nomape"
            name="nomape"
            placeholder="Ingresa tu nombre completo"
            required
          />
          <label
            className="txt_container_contacto_principal"
            htmlFor="telefono"
          >
            Teléfono:
          </label>
          <input
            className="input_enter_principal"
            type="text"
            id="telefono"
            name="telefono"
            placeholder="Ingresa tu teléfono"
            required
          />
          <label className="txt_container_contacto_principal" htmlFor="correo">
            Correo electrónico:
          </label>
          <input
            className="input_enter_principal"
            type="text"
            id="correo"
            name="correo"
            placeholder="Ingresa tu correo"
            required
          />
          <label className="txt_container_contacto_principal" htmlFor="mensaje">
            Mensaje:
          </label>
          <textarea
            className="input_enter_principal"
            type="message"
            id="mensaje"
            name="mensaje"
            placeholder="Escribe tu mensaje"
            required
          ></textarea>
          <div className="container_terminos_principal">
            <input
              className="txt_check_principal"
              type="checkbox"
              id="terminos"
              name="terminos"
            />
            <p className="txt_tc_principal" htmlFor="terminos_principal">
              He leído y aceptado las condiciones establecidas en la clausula de
              protección de datos personales.
            </p>
          </div>
          <div className="container_terminos_principal">
            <input
              className="txt_check_principal"
              type="checkbox"
              id="terminos"
              name="terminos"
            />
            <p className="txt_tc_principal" htmlFor="terminos">
              He leído y aceptado las condiciones establecidas en la política de
              cookies.
            </p>
          </div>
          <div className="container-button-contacto_principal">
            <button className="btn_contacto_principal" type="submit">
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contenido;
