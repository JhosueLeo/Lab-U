import resultado from "../../img/resultados.svg";
import atomo from "../../img/atomo_icon.svg";
import message from "../../img/message.svg";
import s from "../../css/eleccion.module.css";

export default function EleccionComponent() {
  return (
    <>
      <div className={` mt-4 mb-4 ${s.containerDetalle}`}>
        <h2 className={`text-center ${s.title}`}>
          ¿Por qué <span className={`${s.text}`}>elegirnos?</span>
        </h2>
        <div
          className={`flex justify-content-center align-items-center ${s.containerData}`}
        >
          <div className={`${s.resultados}`}>
            <div className={`${s.resultadoCircle}`}>
              <img src={resultado} alt="resultado" />
            </div>
            <p className={`${s.titleData}`}>RESULTADOS RÁPIDOS Y PRECISOS</p>
            <p className={`${s.descData}`}>
              Nos enorgullecemos de entregar resultados de análisis con rapidez
              y exactitud, garantizando información oportuna y precisa para tu
              salud.
            </p>
          </div>
          <div className={`${s.atencion}`}>
            <div className={`${s.atencionCircle}`}>
              <img src={message} alt="message" />
            </div>
            <p className={`${s.titleData}`}>ATENCIÓN PERSONALIZADA</p>
            <p className={`${s.descData}`}>
              Cada cliente es único para nosotros. En LAB-U, te ofrecemos una
              atención personalizada, asegurando que tus necesidades y
              preocupaciones sean nuestra prioridad.
            </p>
          </div>
          <div className={`${s.tecnologia}`}>
            <div className={`${s.tecnologiaCircle}`}>
              <img src={atomo} alt={atomo} />
            </div>
            <p className={`${s.titleData}`}>TECNOLOGÍA AVANZADA</p>
            <p className={`${s.descData}`}>
              Utilizamos tecnología de punta para proporcionar análisis de la
              más alta calidad, asegurando que cada resultado refleje el más
              alto estándar de precisión.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
