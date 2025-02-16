import React, { useState } from "react";
import { Link } from 'react-router-dom';
import anatomia from "../../img/anatomia.gif";
import biologia from "../../img/biologia.gif";
import bioquimica from "../../img/bioquimica.gif";
import hematologia from "../../img/hematologia.gif";
import inmunobioquimica from "../../img/inmunobioquimica.gif";
import microbiologia from "../../img/microbiologia.gif";
import urianalisis from "../../img/urianalisis.gif";
import genetica from "../../img/genetica.gif";
import coagulacion from "../../img/coagulacion.gif";
import TipoUuario from "../../Components/TipoUusuario/tipo_usuario";
import imgNosotros from "../../img/acerca_de_nosotros.svg";
import banner from "../../img/banner.jpg";
import EleccionComponent from "../../Components/Eleccion/Eleccion.jsx";
import Certificaciones from "../../Components/Certificaciones/Certificaciones.jsx";
import { Button } from "primereact/button";
import "../../css/segundoinicio.css";
import "../../css/inicio.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import g1 from "../../img/g1.png";
import g2 from "../../img/g2.png";
import g3 from "../../img/g3.png";
import arrowleft from '../../img/arrowleft.svg';
import numeroimagen from "../../img/telefono.svg";
import emailimagen from "../../img/email.svg";


import recpequeño from "../../img/rectangulo-pequeño.svg";
import computadora from "../../img/computadora.svg";
import triangulo from "../../img/triangulo.svg";
import parteflecha from "../../img/parteflecha.svg";
import tipo1Examen from "../../img/tipo1Examen.svg";
import tipo2Examen from "../../img/tipo2Examen.svg";
import tipo3Examen from "../../img/tipo3Examen.svg";
import tipo4Examen from "../../img/tipo4Examen.svg";
import tipo5Examen from "../../img/tipo5Examen.svg";
import tipo6Examen from "../../img/tipo6Examen.svg";
import tipo7Examen from "../../img/tipo7Examen.svg";
import tipo8Examen from "../../img/tipo8Examen.svg";
import tipo9Examen from "../../img/tipo9Examen.svg";
import flecharoja from "../../img/flecharoja.svg";
import hospital from "../../img/hospitalimg.svg";
import arrowsede from "../../img/arrow-right.svg";

export default function PageInicio() {
  const settings = {
    dots: false, // Establece dots como false para eliminar los indicadores
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const handleVerMasSedes = () => {
    window.location.href = "/sede";
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div>
        <div className="SeparadorHeader">
        </div>
        <div className="container-inicio">
          <div className="ContenedorImgen1">
            <img className="imagen-inicio" src={banner} alt="" />
          </div>


          <div className="container-img-texto">
            <h2 className="texto-superpuesto-inicio">
              Cuidado de calidad, <span className="txt_red">accesible</span>{" "}
              para todos: "Bienvenido a <span className="txt_red"> Lab-U</span>"
            </h2>
            <p className="texto-bajo-inicio">
              Ofrecemos una amplia gama de exámenes de laboratorio clínico.
            </p>
            <button className="bttn-inicio">
              Descubre nuestra tarifas
              <i className="pi pi-angle-right" style={{ color: "white" }}></i>
            </button>
          </div>
        </div>
        <div className="separador3">
        </div>

        <div className="textos">
          <div className="textouno">
            <p className="consulta-resultados">
              ¿Ya te realizaste un <div className="analisis">análisis?</div>
            </p>


            <p className="resultado">A continuación, consulta el estado de tu resultado.</p>
          </div>
          <div className="Contenedor-resultado">
            <img className="computadora" src={computadora} alt="" />
            <div className="SegContenedorResultado">
              <div className="TerContenedorResultado">
                <p className="textodos">
                  Resultados en <div className="veinticuatro">24 horas</div>
                </p>
                <div className="button-container">
                  <button className="bttn2">
                    Ver resultados
                    <img className="parteflecha" src={parteflecha} alt="" />
                    <img className="flecha" src={triangulo} alt="" />
                  </button>
                </div>
              </div>
              <div className="ContainerTextResultado">
                <span>*El tiempo de entrega depende del examen realizado</span>
              </div>
            </div>
          </div>
        </div>
        <div className="separador3">
        </div>

      </div>

      <div className="container_conocenosmas">
        <div className="container_texto_conocenos">
          <div className="container_btn_titulo">
            <div className="botton_conocenos">
              <p>Conócenos más</p> <img className="arrowimgconocenos" src={arrowleft} />
            </div>
            <div className="titulo_acerca">
              <p>Acerca de nosotros</p>
            </div>
          </div>
          <div className="fondo_color_quienes">
            <div className="container_somos">
              <div className="titulo_somos">
                <p>¿Quiénes somos?</p>
              </div>
              <div className="parrafo_acerca">
                <p>Somos Lab-u, una empresa innovadora en análisis clínicos, comprometidos
                  con la precisión y el cuidado de su salud. Nos dedicamos a garantizar
                  la máxima fiabilidad en los resultados de tus análisis. Combinando tecnología
                  avanzada con un equipo experto, nos esforzamos por ofrecer resultados
                  precisos y de calidad en los que puedes confiar para cuidar tu salud.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="img_acerca">
        </div>
      </div>

      <Certificaciones />


      <EleccionComponent />
      <div className="separador2">
      </div>

      {/*
 Tipos de Evaluaciones
*/}
      <div className="Texto-Examenes">
        <div className="TituloExamenes">
          <h1>Nuestros <div className="TiposExam">Tipos de Exámenes</div></h1>
          <div className="button-Examenes">

            <p>Ofrecemos una amplia gama de exámenes de laboratorio para satisfacer
              todas tus necesidades de diagnóstico. Cada prueba se realiza con la más
              alta precisión y cuidado asegurando resultados confiables para tu
              tranquilidad y salud.</p>

            <button className="bttn-Examenes">
              Ver resultados

              <img className="flecharoja" src={flecharoja} alt="" />
            </button>
          </div>
        </div>
        <div className="Tipos-Examenes">
          <div className="Tipo1">
            <img className="Tipo1Image" src={tipo1Examen} alt="" />
            <p>Anatomía Patológica</p>
          </div>

          <div className="Tipo2">
            <img className="Tipo2Image" src={tipo2Examen} alt="" />
            <p>Biología Molecular</p>
          </div>

          <div className="Tipo3">
            <img className="Tipo3Image" src={tipo3Examen} alt="" />
            <p>Bioquimíca</p>
          </div>

          <div className="Tipo4">
            <img className="Tipo4Image" src={tipo4Examen} alt="" />
            <p>Hematología</p>
          </div>

          <div className="Tipo5">
            <img className="Tipo5Image" src={tipo5Examen} alt="" />
            <p>Inmunobioquímica</p>
          </div>

          <div className="Tipo6">
            <img className="Tipo6Image" src={tipo6Examen} alt="" />
            <p>Microbiología</p>
          </div>

          <div className="Tipo7">
            <img className="Tipo7Image" src={tipo7Examen} alt="" />
            <p>Urianálisis</p>
          </div>

          <div className="Tipo8">
            <img className="Tipo8Image" src={tipo8Examen} alt="" />
            <p>Genética</p>
          </div>

          <div className="Tipo9">
            <img className="Tipo9Image" src={tipo9Examen} alt="" />
            <p>Coagulación</p>
          </div>

        </div>
      </div>
      <div className="separador">
      </div>

      {/*
  Analisis
*/}

      <div>

        <div className="EncabezadoH">
          <div>
            <h1 className="TituloS">Nuestras sedes</h1>
          </div>
          <div className="DescripHos">
            <p>Visita todas nuestras sedes</p>
            <div className="BotonSedes">

            </div>
          </div>
        </div>

        <div className="GrupoHospital">
          <div className="Hospital1">
            <img className="hospitalimg" src={hospital} alt="" />
            <div className="HospitalTitulo1">

              <h1 className="SedeAte">Sede Ate</h1>
              <p className="Local1">Local 1</p>
            </div>
            <div className="Ubicacion1">
              <p className="UbicacionM">Av. Metropolitana 220, Ate.</p>
              <div className="ImagenUbicacion">

              </div>
            </div>
          </div>
          <div className="Hospital2">
            <img className="hospitalimg" src={hospital} alt="" />
            <div className="HospitalTitulo1">

              <h1 className="SedeAte">Sede Comas</h1>
              <p className="Local1">Local 1</p>
            </div>
            <div className="Ubicacion1">
              <p className="UbicacionM">Calle 30 N° 185 Lt. 4 (2do Piso) Urb. El Pinar, Comas.</p>
              <div className="ImagenUbicacion">

              </div>
            </div>
          </div>
          <div className="Hospital3">
            <img className="hospitalimg" src={hospital} alt="" />
            <div className="HospitalTitulo1">

              <h1 className="SedeAte">Sede Callao</h1>
              <p className="Local1">Local 1</p>
            </div>
            <div className="Ubicacion1">
              <p className="UbicacionM">Calle Las azucenas 125 Urb Vipol, Callao.</p>
              <div className="ImagenUbicacion">

              </div>
            </div>
          </div>
        </div>
        <div className="ContenedorBtnSede">
          <button className="bttnSede" onClick={handleVerMasSedes}>
            Ver más sedes
            <img className="flechasede" src={arrowsede} alt="" />
          </button>
        </div>
      </div>




      <div className="container_general_atenderte">

        <div>
          <p className="titulo_atencion">¡Estamos listos para </p>
        </div>

        <div className="container_contact">
          <img className="" src={numeroimagen} alt="Lab-U" />
          <p className="contac_num">+51 908 815 833</p>
          <div className="linea_vertical"></div>
          <img className="" src={emailimagen} alt="Lab-U" />
          <p className="contac_email">contacto@lab-u.pe</p>
        </div>

        <div>
          <button className="btn_consultar_atencion" type="button" >Consultar ahora &nbsp; &nbsp;</button>
        </div>

      </div>

    </>
  );
}
