import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import genxplus from "../../img/genxplus.svg";
import x from "../../img/x.svg";
import manos from "../../img/manos.svg";
import liston from "../../img/liston.svg";
import bote from "../../img/bote.svg";
import cerebro from "../../img/cerebro.svg";
import corazon from "../../img/corazon.svg";
import persona from "../../img/persona.svg";
import atomo from "../../img/atomo.svg";
import flecha from "../../img/flecha.svg";
import iso9001 from "../../img/certificacioniso9001.svg";
import iso14001 from "../../img/certificacioniso14001.svg";
import iso37001 from "../../img/certificacioniso37001.svg";
import iso45001 from "../../img/certificacioniso45001.svg";
import iso27001 from "../../img/certificacioniso27001.svg";
import styles from "../../css/Plus.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Plus = () => {
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
    <div className={styles.container}>
      <div className={styles.img}>
        <img className={styles.baner} src={genxplus} alt="BanerXPlus" />
        <h1 className={styles.textBaner}>
          ¡Tu viaje hacia una{" "}
          <span className="red">
            {" "}
            salud <br /> personalizada
          </span>{" "}
          comienza aquí!
        </h1>
      </div>
      <div className={styles.plan}>
        <p>
          <b>Plan Gen </b>
          <img src={x} alt="" /> Plus
        </p>
      </div>
      <div className={styles.Info}>
        <div className={styles.Info2}>
          <div className={styles.plan2}>
            <img className={styles.manos} src={manos} alt="manos" />
            <p className={styles.text}>
              <b>Plan Gen </b>
              <img src={x} alt="" /> Plus
            </p>
          </div>
          <div className={styles.info}>
            <p className={styles.info1}>
              <b>Lista De Enfermedades</b>
            </p>
            <p className={styles.info2}>
              Nuestro primer plan cuenta con 15 enfermedades por <br /> ser
              analizadas
            </p>
          </div>
        </div>
        <div className={styles.cartas}>
          <div className={styles.cards}>
            <div className={styles.card1}>
              <img className={styles.laso} src={liston} alt="laso" />
              <ul className={styles.dat}>
                <li className={styles.dato}>
                  <div className={styles.dot}></div>Cáncer de mama o próstata
                </li>
                <li className={styles.dato}><div className={styles.dot}></div>Cáncer de ovario o testículo</li>
                <li className={styles.dato}><div className={styles.dot}></div>Cáncer de colon</li>
                <li className={styles.dato}><div className={styles.dot}></div>Síndrome de tumor de <br /> hamartoma PTEN (Nefroblastoma)
                </li>
                <li className={styles.dato}><div className={styles.dot}></div> Poliposis asociada a MUTYH</li>
              </ul>
            </div>
            <div className={styles.card2}>
              <img className={styles.bote} src={bote} alt="bote" />
              <ul className={styles.dat}>
                <li className={styles.dato}><div className={styles.dot}></div> Poliposis adenomatosa familiar</li>
                <li className={styles.dato}><div className={styles.dot}></div>
                  Cáncer de tiroides medular familiar
                </li>
                <li className={styles.dato}><div className={styles.dot}></div> Hipertermia Maligna</li>
              </ul>
            </div>
            <div className={styles.card3}>
              <img className={styles.cerebro} src={cerebro} alt="cerebro" />
              <ul className={styles.dat}>
                <li className={styles.dato}><div className={styles.dot}></div> Cardiomiopatía hipertrófica</li>
                <li className={styles.dato}><div className={styles.dot}></div> Cardiomiopatía dilatada</li>
                <li className={styles.dato}><div className={styles.dot}></div> Cardiomiopatía restrictiva</li>
                <li className={styles.dato}><div className={styles.dot}></div> Neurofibromatosis tipo 2</li>
              </ul>
            </div>
          </div>
          <div className={styles.cards2}>
            <div className={styles.card4}>
              <img className={styles.corazon} src={corazon} alt="corazon" />
              <p className={styles.dat1}>Hipercolesterolemia familiar</p>
            </div>
            <div className={styles.card5}>
              <img className={styles.persona} src={persona} alt="persona" />
              <p className={styles.dat1}>Enfermedad de Wilson</p>
            </div>
            <div className={styles.card6}>
              <img className={styles.atomo} src={atomo} alt="atomo" />
              <p className={styles.dat1}>Porfiria Aguda Intermitente</p>
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <button className={styles.btn1}>Separa una consulta gratuita</button>
          <button className={styles.btn2}>Consulta por este plan
            <img className={styles.flecha} src={flecha} alt="flecha" />
          </button>
        </div>
        <div className={styles.certi}>
          <h2 className={styles.text1}>Nuestras Certificaciones</h2>
          <p className={styles.text2}>5 Certificaciones Internacionales</p>
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
    </div>
  );
};

export default Plus;
