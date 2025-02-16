import { Button } from 'primereact/button';
import usuario from "../../img/TipoUsuarioGifs/usuariot.gif";
import medico from "../../img/TipoUsuarioGifs/medicot.gif";
import empresa from "../../img/TipoUsuarioGifs/empresat.gif";
import "../../css/tipo_usuario.css"

export default function tipo_usuario() {
  return (
    <>
      <div className="contenedor-usuario mb-5">
        <div className="text_t-usuario">
          <div className="tit_t-usuario flex justify-content-center align-items-center">
            <h1>
              ¿Necesitas hacer un <span>análisis?</span>
            </h1>
          </div>
          <div className="sub_t-usuario flex justify-content-center align-items-center">
            <h3>A continuación selecciona el tipo de usuario que eres.</h3>
          </div>
          <div className="caja_tipo flex justify-content-center align-items-center mt-5">
            <div className="caja">
              <div className="img_usuario mt-5">
                <img src={usuario} alt="" style={{width: "66px", height: "78.84px"}}/>
              </div>
              <div className="text-button flex justify-content-center align-items-center">
                <h3 className='mr-3'>Paciente</h3>
                <Button className='d-flex align-items-center'><i className='pi pi-angle-right' style={{color: "white"}}></i></Button>
              </div>
            </div>

            <div style={{ margin: "0 20px" }}></div>


            <div className="caja">
              <div className="img_medico mt-5">
                <img src={medico} alt="" style={{width: "66px", height: "78.84px"}}/>
              </div>
              <div className="text-button flex justify-content-center align-items-center">
                <h3 className='mr-3'>Médico</h3>
                <Button className='d-flex align-items-center'><i className='pi pi-angle-right' style={{color: "white"}}></i></Button>
              </div>
            </div>

            <div style={{ margin: "0 20px" }}></div>

            
            <div className="caja">
              <div className="img_empresa mt-5">
                <img src={empresa} alt="" style={{width: "66px", height: "78.84px"}}/>
              </div>
              <div className="text-button flex justify-content-center align-items-center">
                <h3 className='mr-3'>Empresa</h3>
                <Button className='d-flex align-items-center'><i className='pi pi-angle-right' style={{color: "white"}}></i></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
