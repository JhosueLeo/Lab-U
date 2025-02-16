import React, { useEffect, useState } from "react";
import genxfuturo from "../../img/genxfuturo.svg";
import x from "../../img/x.svg";
import manos from "../../img/manos.svg";
import flecha from "../../img/flecha.svg";
import iso9001 from "../../img/certificacioniso9001.svg";
import iso14001 from "../../img/certificacioniso14001.svg";
import iso37001 from "../../img/certificacioniso37001.svg";
import iso45001 from "../../img/certificacioniso45001.svg";
import iso27001 from "../../img/certificacioniso27001.svg";
import icon_descarga from "../../img/icon_descarga.svg";
import styles from "../../css/Futuro.module.css";
import Slider from "react-slick";

function Futuro() {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 600) {
        setSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 1,
        }));
      } else if (windowWidth <= 1024) {
        setSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 2,
        }));
      } else {
        setSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 3,
        }));
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [iso45001, iso9001, iso14001, iso37001, iso27001];
  return (
    <div>
      <div className={styles.img}>
        <img className={styles.baner} src={genxfuturo} alt="BanerXFuturo" />
        <h1 className={styles.textBaner}>
          ¡Tu viaje hacia una{" "}
          <span className={styles.red}>
            {" "}
            salud <br /> personalizada
          </span>{" "}
          comienza aquí!
        </h1>
      </div>
      <div className={styles.plan}>
        <p className={styles.text}>
          <b>Plan Gen</b>
          <img className={styles.x} src={x} alt="" />
          Futuro
        </p>
      </div>
      <div className={styles.container_ttl}>
        <p>
          <b>Lista De Enfermedades</b>
        </p>
      </div>

      <div className={styles.container_general}>
        <div className={styles.container_info}>
          <div className={styles.container_info1}>
            <div className={styles.container_info1_txt}>
              <label>Desacarta más de 180 enfermedades</label>
            </div>
          </div>
          <button className={styles.container_info2_btn}>
            <img src={icon_descarga} alt="" />
            <label className={styles.info2_txt}>
              Descargas las 183 enfermedades
            </label>
          </button>
          <div className={styles.container_btn}>
            <button className={styles.btn1}>
              Separa una consulta gratuita
            </button>
            <button className={styles.btn2}>
              Consulta por este plan
              <img className={styles.flecha} src={flecha} alt="flecha" />
            </button>
          </div>
        </div>

        <div className={styles.container_desc}>
          <img className={styles.container_desc_img} src={manos} alt="manos" />
          <p className={styles.text}>
            <b>Plan Gen </b>
            <img className={styles.x} src={x} alt="" /> Plus
          </p>
          <div className={styles.container_desc_txtcomp}>
            <label className={styles.container_desc_txtbold}>
              71% de hospitalizaciones pediátricas son ocasionadas por
              enfermedadesde origen genético.
            </label>
            <label className={styles.container_desc_txt}>
              Este plan nos permite identificar potenciales enfermedades
              provocadas porgenes recesivos. Las enfermedades recesivas se
              heredan a la siguientegeneración, mas no se desarrollan en el
              portador (padres)
            </label>
            <label className={styles.container_desc_txtbold}>Dirigido a:</label>
            <label className={styles.container_desc_txt}>
              Parejas con planes reproductivos
            </label>
            <label className={styles.container_desc_txt}>
              Padres con niños entre los 0 a 15 años.
            </label>
          </div>
        </div>
      </div>

      <div className={styles.container_ttl2}>
        <label>Nuestras Certificaciones</label>
      </div>
      <div className={styles.container_sbttl}>
        <label>5 Certificaiones Internacionales</label>
      </div>
      <div className={styles.certi2}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Futuro;
