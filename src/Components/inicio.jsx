import React from "react";
import analisismuestra from "../img/analisisuno.svg";
import { Carousel } from "primereact/carousel";
import "../css/carosuel_inicio_com.css";

export default function CircularDemo() {
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = () => {
    return (
      <div className="container_carousel">
        <div className="">
          <img src={analisismuestra} alt="" />
        </div>
        <div className="text">
          <div className="tit_lis">
            <h2>Listado de Exámenes</h2>
          </div>
          
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        numVisible={1}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
