import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import styles from "../../css/Table.module.css";
import izquierda from "../../img/iconizquierda.svg";
import derecha from "../../img/iconderecha.svg";
import AxiosServices from "../../AuthUser";
import '../../css/buttonCerrar.css';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Table = () => {


  const { http, deleteToken } = AxiosServices()
  // Datos de ejemplo para la paginación
  const navigate = useNavigate();
  const [atenciones, setAtenciones] = useState([]);
  const [atencion, setAtencion] = useState({});
  const [persona, setPersona] = useState("");

  let paciente_id = JSON.parse(localStorage.getItem("paciente_id"));

  const getResultados = () => {
    http
      .get(`paciente/laboratorio/resultados/${paciente_id}`)
      .then((response) => {
        console.log(response);
        if (response.data.data) {
          setPersona(response?.data?.data?.nombres_completos);
          const data = response?.data?.data?.laboratorio.map(data => data?.lab_pruebas);
          console.log("daaata", response?.data?.data?.nombres_completos);

          if (data.length > 0) {
            let resultado = [].concat.apply([], data)
            setAtenciones(resultado);
          } else {
            setAtenciones([])
          }
        }

      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleClose = () => {
    deleteToken();
    let url = "/resultados";
    console.log(url);
    navigate(url);
  };

  useEffect(() => {
    getResultados();
  }, []);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * itemsPerPage;
  const slicedData =
    atenciones && atenciones.slice(offset, offset + itemsPerPage);

  const [visible, setVisible] = useState(false);
  console.log(slicedData);
/*
  const downloadPDF = (item) => {
    if (!item.archivo) return;

    const doc = new jsPDF();
    doc.text(`Nombre de Análisis: ${item.examen.nombre}`, 10, 10);
    doc.text(`Fecha: ${item.fecha_registro}`, 10, 20);
    doc.text(`Estado: ${item.archivo ? "Procesado" : "En proceso"}`, 10, 30);
    doc.save("documento.pdf");
  };
*/
const downloadPDF = (url) => {
  axios.get(url, {
    responseType: 'blob'
  })
  .then((response) => {
    const pdfBlob = new Blob([response.data], { type: 'application/pdf' });

    const reader = new FileReader();
    reader.onloadend = () => {
      const pdfData = reader.result;
      const pdf = new jsPDF();
      pdf.addImage(pdfData, 'PDF', 0, 0, 210, 297); 
      pdf.save('documento.pdf');
    };
    reader.readAsDataURL(pdfBlob);
  })
  .catch((error) => {
    console.error('Error al descargar el PDF:', error);
  });
};



  return (
    <div className={styles.conteiner}>
      <div className={styles.usuario}>
        <p className={styles.text1}>Bienvenido(a)</p>
        <p className={styles.text2}>{persona}</p>
      </div>


      <div className={`p-4 mt-5 ${styles.table}`}>
        <p className={styles.text}>Mi resultado</p>
        <div className="table-container">

          <table className="mt-4">
            <thead>
              <tr>
                <th>Nombre de Análisis</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <tbody>
              {slicedData && slicedData.length > 0 ? (
                slicedData.map((item, index) => (
                  <tr key={index}>
                    <td>{item?.examen.nombre}</td>
                    <td>{item?.fecha_registro}</td>
                    <td>{item?.archivo ? "Procesado" : "En proceso"}</td>
                    <td>
                      <Button
                        className="pdf-btn"
                        icon="pi pi-file-pdf"
                        text
                        severity="danger"
                        aria-label="FilePDF"
                        onClick={() => {
                          setAtencion(item);
                          setVisible(true);
                        }}
                        disabled={item.archivo ? false : true}
                      />
                      <Button
                        className="pdf-download-btn"
                        icon="pi pi-download"
                        text
                        severity="info"
                        aria-label="DownloadPDF"
                        /*onClick={() => downloadPDF(item)}*/
                        onClick={() => downloadPDF('https://produccion.bregma.com.pe/public/storage/laboratorio/1-VPH.pdf')}
                        disabled={!item.archivo}
                      />
                      
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No hay datos disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Dialog
          visible={visible}
          style={{ width: "80vw", height: "120vh" }}
          onHide={() => setVisible(false)}
          contentStyle={{ overflow: "hidden" }} // Agregar esta línea para deshabilitar el desplazamiento
        >
          <h2 className="plResultados">Resultados</h2>
          <iframe
            title="PDF"
            style={{ width: "100%", height: "80%", border: "none" }}
            src={atencion?.archivo}
          />
          <div className="ContainerCerrarPedf">

            <a className="CerrarPdf" onClick={() => setVisible(false)}>Cerrar</a>
          </div>
          
        </Dialog>

        <div className={styles.paginationContainer}>
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
              onChange={(e) => {
                const inputValue = parseInt(e.target.value, 10);
                if (!isNaN(inputValue)) {
                  setCurrentPage(
                    Math.min(
                      Math.max(inputValue - 1, 0),
                      Math.ceil(atenciones.length / itemsPerPage) - 1
                    )
                  );
                }
              }}
              min={1}
              max={atenciones ? Math.ceil(atenciones.length / itemsPerPage) : 1}
              className={styles.pageNumberInput} // Nuevo estilo para desactivar las flechas de incremento y decremento
            />
            <span
              onClick={() =>
                setCurrentPage((prevPage) =>
                  Math.min(
                    prevPage + 1,
                    Math.ceil(atenciones.length / itemsPerPage) - 1
                  )
                )
              }
            >
              {<img src={derecha} alt="Next" />}
            </span>
          </div>
        </div>
        <div className="card flex flex-wrap justify-content-center gap-1">
          <a className="custom-close-button" onClick={handleClose}>Cerrar</a>
        </div>
      </div>
    </div>
  );
};

export default Table;
