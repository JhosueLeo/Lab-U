import React, { useState } from "react";
import styles from "./css/PreguntasFrecuentes.module.css";
import proceso1 from "./img/proceso1.svg";
import proceso2 from "./img/proceso2.svg";
import proceso3 from "./img/proceso3.svg";
import proceso4 from "./img/proceso4.svg";
import lineabajo from "./img/flechabajo.svg";
import linePreguntas from "./img/lineapreguntas.svg";

function PreguntasFrecuentes() {
    const [procesoSeleccionado, setProcesoSeleccionado] = useState("");
    const [mostrarPreguntas, setMostrarPreguntas] = useState(true);
    

    const handleClick = (proceso) => {
        setProcesoSeleccionado(proceso);
        setMostrarPreguntas(false); // Oculta las preguntas al hacer clic en una imagen
    };

    return (
        <div className={styles.preguntasFrecuentesContainer}>
            <h2 className={styles.TituloPreguntas}>Preguntas <div className={styles.TituloFrecuentes}>Frecuentes</div></h2>

            <div className={styles.DispFlex}>

                <div className={styles.ProcesosS}>
                    <div className={styles.preguntas}>
                        {procesos.map((proceso) => (
                            <div key={proceso.id} className={styles.proceso1}>
                                <img
                                    src={getImagenSrc(proceso.id).src}
                                    alt={proceso.nombre}
                                    type="button"
                                    onClick={() => handleClick(proceso.nombre)}
                                    className={`${styles.procesoButton} ${getImagenSrc(proceso.id).className}`}
                                />
                                <p className={styles.procesoT1}>{proceso.nombre}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.PreguntasF}>
                    {mostrarPreguntas && (
                        <>
                            <div className={styles.PreguntaCont1}>
                                <div className={styles.ContenedorPregunta1} >
                                    <p className={styles.Pregunta1}>1. ¿Necesito cita previa para realizar los exámenes?</p>
                                </div>
                                <div>
                                <img className={styles.flechabajo} src={lineabajo} alt='' />
                            </div>

                            </div>
                            <img className={styles.linePreguntas} src={linePreguntas} alt='' />

                            <div className={styles.PreguntaCont1}>
                                <div className={styles.ContenedorPregunta2}>
                                    <p className={styles.Pregunta2}>2. ¿Cuánto tiempo tarda el proceso de toma de muestras?</p>
                                </div>
                                <div>
                                <img className={styles.flechabajo2} src={lineabajo} alt='' />
                            </div>

                            </div>
                            <img className={styles.linePreguntas} src={linePreguntas} alt='' />

                            <div className={styles.PreguntaCont1}>
                                <div ContenedorPregunta3>
                                    <p className={styles.Pregunta3}>3. ¿Hay restricciones alimenticias antes de los exámenes?</p>
                                </div>
                                <div>
                                <img className={styles.flechabajo3} src={lineabajo} alt='' />
                            </div>

                            </div>
                            <img className={styles.linePreguntas} src={linePreguntas} alt='' />
                        </>
                    )}
                </div>

                <div className={styles.preguntasFrecuentes}>
                    {procesos.map((proceso) => (
                        proceso.nombre === procesoSeleccionado && (
                            <div key={proceso.id} className={styles.pregunta}>
                                {proceso.preguntas.map((pregunta) => (
                                    <div key={pregunta.id} className={styles.preguntaItem}>
                                        <p className={styles.ContenidoPreguntas}>{pregunta.pregunta}</p>
                                        <img
                                            src={getImagenPreguntaSrc().src}
                                            alt={`Imagen debajo de la pregunta`}
                                            className={getImagenPreguntaSrc().className}
                                        />
                                    </div>
                                    
                                ))}
                            </div>
                            
                        )
                    ))}
                </div>

            </div>
        </div>
    );
}



function getImagenSrc(id) {
    switch (id) {
        case 1:
            return { src: proceso1, className: styles.imagenProceso1 };
        case 2:
            return { src: proceso2, className: styles.imagenProceso2 };
        case 3:
            return { src: proceso3, className: styles.imagenProceso3 };
        case 4:
            return { src: proceso4, className: styles.imagenProceso4 };
        default:
            return { src: "", className: "" };
    }
}
function getImagenPreguntaSrc() {
    return { src: linePreguntas, className: styles.preguntaImage };
}

const procesos = [
    {
        id: 1,
        nombre: "Proceso de toma de muestras",
        preguntas: [
            {
                id: 1,
                pregunta: "1. ¿Necesito cita previa para realizar los exámenes?",
            },
            {
                id: 2,
                pregunta: "2. ¿Cuánto tiempo tarda el proceso de toma de muestras?",
            },
            {
                id: 3,
                pregunta: "3. ¿Hay restricciones alimenticias antes de los exámenes?",
            }
        ],
    },
    {
        id: 2,
        nombre: "Resultados y entrega",
        preguntas: [
            {
                id: 4,
                pregunta: "1. ¿Cuándo recibiré los resultados de los exámenes?",
            },
            {
                id: 5,
                pregunta: "2. ¿Cómo puedo obtener los resultados de los exámenes?",
            },
            {
                id: 6,
                pregunta: "3. Pregunta 6",
            }
        ],
    },
    {
        id: 3,
        nombre: "Colaboraciones médicas",
        preguntas: [
            {
                id: 7,
                pregunta: "1. ¿Trabajamos con otros centros médicos?",
            },
            {
                id: 8,
                pregunta: "2. ¿Cómo puedo solicitar una colaboración médica?",
            },
            {
                id: 9,
                pregunta: "3. Pregunta 9",
            }
        ],
    },
    {
        id: 4,
        nombre: "Solicitudes especiales",
        preguntas: [
            {
                id: 10,
                pregunta: "1. ¿Puedo solicitar un examen especial?",
            },
            {
                id: 11,
                pregunta: "2. ¿Cómo puedo solicitar un examen especial?",
            },
            {
                id: 12,
                pregunta: "3. Pregunta 12",
            }
        ],
    },
];

export default PreguntasFrecuentes;
