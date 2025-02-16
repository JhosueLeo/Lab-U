import certificadoiso9001 from "../../img/certificacioniso9001.svg";
import certificadoiso14001 from "../../img/certificacioniso14001.svg";
import certificadoiso37001 from "../../img/certificacioniso37001.svg";
import certificadoiso45001 from "../../img/certificacioniso45001.svg";
import certificadoiso27001 from "../../img/certificacioniso27001.svg";
import recpequeño from "../../img/rectangulo-pequeño.svg";

export default function Certificaciones() {
  return (
    <>
      <div className="CentrarCertificaciones">
        <div className="UnionCuadrado">
          <div className="certificadosisoimagen" >

            <div className="certificadosiso9001">


              <div className="Certificado9001">

                <img src={certificadoiso9001} style={{ width: "300px" }} alt="" />
                <h1 className="Titulo9001">ISO 9001 </h1>
                <img className="recpequeño" src={recpequeño} alt="" />
                <p className="Descripcion9001">Gestión de calidad</p>
              </div>

              <div className="Certificado14001">
                <img src={certificadoiso14001} style={{ width: "320px" }} alt="" />
                <h1 className="Titulo14001">ISO 14001 </h1>
                <img className="recpequeño" src={recpequeño} alt="" />
                <p className="Descripcion14001">Protección del medioambiente</p>
              </div>

              <div className="Certificado27001">
                <img src={certificadoiso45001} style={{ width: "330px" }} alt="" />
                <h1 className="Titulo27001">ISO 27001 </h1>
                <img className="recpequeño" src={recpequeño} alt="" />
                <p className="Descripcion27001">Sistema de información</p>
              </div>

            </div>
            <div className="certificadosiso27001">
              <div className="Certificado45001">
                <img src={certificadoiso27001} style={{ width: "320px" }} alt="" />
                <h1 className="Titulo45001">ISO 45001 </h1>
                <img className="recpequeño" src={recpequeño} alt="" />
                <p className="Descripcion45001">Seguridad y salud en el trabajo</p>
              </div>

              <div className="Certificado37001">
                <img src={certificadoiso37001} style={{ width: "320px" }} alt="" />
                <h1 className="Titulo37001">ISO 37001 </h1>
                <img className="recpequeño" src={recpequeño} alt="" />
                <p className="Descripcion37001">Sistema antisoborno</p>
              </div>
            </div>
          </div>
        </div>
        <div className="containercertificados">
          <h3 className="nuestrascertificacionesh3">
            Nuestras Certificaciones
          </h3>
          <p className="parrafocertificaciones">
            Somos un laboratorio molecular dedicado a realizar pruebas genéticas
            en el Perú. Contamos con <div className="certificacionesnegrita">5 certificaciones internacionales</div> que
            garantizan la transparencia y objetividad para ejecutar
            correctamente los procesos en todas las etapas.
          </p>
        </div>
      </div>
    </>
  );
}
