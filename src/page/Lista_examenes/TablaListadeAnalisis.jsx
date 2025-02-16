import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "./CSSTabla.css";
import lupita from "../../img/lupita.svg";
import vertabla from "../../img/ver.svg";
import izquierda from "../../img/iconizquierda.svg";
import derecha from "../../img/iconderecha.svg";

export default function TablaLista_examenes_page() {
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="container-analissi-tabla">
      <div className="Nav">
        <h2 className="textTitulo2">Búsqueda detallada</h2>
        <input
          className="inputtt"
          type="text"
          placeholder="Localizar por tipo de análisis"
        />
        <div className="RadioTxt">
          <input type="radio" name="" id="" />
          <h2 className="textTitulo2">Alfabéticamente A a Z</h2>
        </div>
      </div>
      <div className="ContenedorTabla">
        <table className="tabla-analisis">
          <thead style={{ backgroundColor: "transparent" }}>
            <tr
              style={{
                borderTop: "2px solid rgba(224, 56, 84, 0.5)",
              }}
            >
              <th style={{ borderRadius: "20px 0px 0px" }}>Item</th>
              <th>Identificación del análisis</th>
              <th
                style={{
                  borderRadius: "0px 20px 0px 0px",
                  textAlign: "center",
                }}
              >
                Detalle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Hemograma Completo</td>
              <td className="centrarDE">
                <button onClick={() => setVisible(true)} className="detalle">
                  <img src={vertabla} alt="" />
                  Ver
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Diabetes Monogénica</td>
              <td className="centrarDE">
                <button onClick={() => setVisible(true)} className="detalle">
                  <img src={vertabla} alt="" />
                  Ver
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Cardiomiopatía hipertrófica</td>
              <td className="centrarDE">
                <button onClick={() => setVisible(true)} className="detalle">
                  <img src={vertabla} alt="" />
                  Ver
                </button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Hemocromatosis hereditaria</td>
              <td className="centrarDE">
                <button onClick={() => setVisible(true)} className="detalle">
                  <img src={vertabla} alt="" />
                  Ver
                </button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Leucemia aguda</td>
              <td className="centrarDE">
                <button onClick={() => setVisible(true)} className="detalle">
                  <img src={vertabla} alt="" />
                  Ver
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <Dialog
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          <h2 className="pl-4">Detalles</h2>
          <p className="pl-4 mb-4">Ver detalles</p>
        </Dialog>

        <div className="paginationContainer">
          <div>
            <span
              onClick={() =>
                setCurrentPage((prevPage) => Math.max(prevPage - 1, 0))
              }
            >
              {<img src={izquierda} alt="Previous" />}
            </span>
            <input
              type="text"
              value={currentPage + 1}
              readOnly
              //   onChange={(e) => {
              //     const inputValue = parseInt(e.target.value, 10);
              //     if (!isNaN(inputValue)) {
              //       setCurrentPage(
              //         Math.min(
              //           Math.max(inputValue - 1, 0),
              //           Math.ceil(data.length / itemsPerPage) - 1
              //         )
              //       );
              //     }
              //   }}
              //   min={1}
              //   max={Math.ceil(data.length / itemsPerPage)}
              className=""
            />
            <span
            //   onClick={() =>
            //     setCurrentPage((prevPage) =>
            //       Math.min(
            //         prevPage + 1,
            //         Math.ceil(data.length / itemsPerPage) - 1
            //       )
            //     )
            //   }
            >
              {<img src={derecha} alt="Next" />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
