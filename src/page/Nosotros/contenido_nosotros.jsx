import React from 'react';
import styles from "../../css/style_nosotros.module.css";
import fotodos from "../../img/honestos.svg";
import fototres from "../../img/retos.svg";
import fotocuatro from "../../img/empaticos.svg";
import fotocinco from "../../img/bien.svg";
import fotoseis from "../../img/primerocl.svg";

import fotologolabuU from '../../img/logolabuU.svg';
import backgroundacerca from '../../img/backgroundacerca.svg';

import objetivo from '../../img/objetivo.svg';
import cohete from '../../img/cohete.svg';

function Contenido_nosotros() {
    return (
        <body>

            <div className="SeparadorHeader">
            </div>

            <div>
                
                <div className={styles.img}>
                    <div className={styles.ContenedorVistaNosotros}>
                    <img src={ backgroundacerca } className={styles.baner}/>
                    </div>
                    <div className={styles.container_nosotros}>
                        <p className={ styles.titulo1 }><span className={styles.span1}>Inicio</span> / Acerca de nosotros</p>
                        <div className={ styles.separacion1 }>
                        <img src={fotologolabuU} />
                        </div>

                        <div className={ styles.separacion2 }>
                            <h1 className={styles.text_baner}>Acerca de <span className={ styles.span2 }>nosotros</span></h1>
                        </div>

                        <div className={ styles.separacion3 }>
                            <p className={styles.texto_abajo}>
                                Una empresa innovadora en análisis clínicos, comprometidos 
                                con la precisión y el cuidado de su salud. Nos dedicamos a 
                                garantizar la máxima fiabilidad en los resultados de tus análisis. 
                                Combinando tecnología avanzada con un equipo experto, nos esforzamos 
                                por ofrecer resultados precisos y de calidad en los que puedes confiar para cuidar tu salud.
                            </p>
                        </div>
                    </div>
                    
                </div>

            </div>
            
            <div className={styles.container_mv}>
                <div className={styles.mision}>
                    <div className={styles.titulo_mv}>
                        <img className={styles.img_mv} src={objetivo} alt="objetivo" />
                        <b> MISIÓN</b>
                    </div>
                    <p className={styles.parra_mision}>Proporcionar análisis clínicos de la más alta precisión y fiabilidad, utilizando tecnología avanzada y prácticas innovadoras para garantizar el bienestar y la satisfacción de nuestros clientes.</p>
                </div>
                <div className={styles.vision}>
                    <div className={styles.titulo_mv}>
                        <img className={styles.img_mv} src={cohete} alt="cohete" />
                        <b>VISIÓN</b>
                    </div>
                    <p className={styles.parra_vision}>Para 2026, aspiramos a liderar en análisis clínicos, elevando estándares de excelencia y ampliando el acceso a diagnósticos de calidad para mejorar la salud comunitaria.</p>
                </div>
            </div>

            <div className={styles.container_valores_principal}>
                <p className={styles.titulo_valores}> Nuestros <div className={styles.valoresR}>valores</div></p>
                <div className={styles.container_v}>
                    <div className={styles.container_valores}>
                        <div className={styles.card}>
                            <div className={styles.desplazamiento}>
                                <div className={styles.image_section}>
                                    <img className={styles.valores1} src={fotodos} alt="" />
                                </div>
                            </div>
                            <p className={styles.parra_titulo}><b>Somos honestos</b></p>
                            <p className={styles.parra_valores}>Entender al otro y sus necesidades fortalece nuestras relaciones.</p>
                        </div>
                        <div className={styles.card2}>
                            <div className={styles.desplazamiento}>
                                <div className={styles.image_section}>
                                    <img className={styles.valores2} src={fototres} alt="" />
                                </div>
                            </div>

                            <p className={styles.parra_titulo2}><b>Nos gustan los retos</b></p>
                            <p className={styles.parra_valores2}>Enfrentamos los desafíos con gusto y tenacidad.</p>
                        </div>
                        <div className={styles.card3}>
                            <div className={styles.desplazamiento}>
                                <div className={styles.image_section}>
                                    <img className={styles.valores3} src={fotocuatro} alt="" />
                                </div>
                            </div>

                            <p className={styles.parra_titulo}><b>Somos empáticos</b></p>
                            <p className={styles.parra_valores}>Ser honestos genera confianza que es la base de todas las relaciones.</p>
                        </div>
                        <div className={styles.card4}>
                            <div className={styles.desplazamiento}>
                                <div className={styles.image_section}>
                                    <img className={styles.valores4} src={fotocinco} alt="" />
                                </div>
                            </div>
                            <p className={styles.parra_titulo2}><b>Bien común</b></p>
                            <p className={styles.parra_valores2}>Nuestros esfuerzos adquiere sentido cuando contempla el beneficio de todos.</p>
                        </div>

                        <div className={styles.cardultimo}>
                            <div className={styles.desplazamiento}>
                                <div className={styles.image_section}>
                                    <img className={styles.valores5} src={fotoseis} alt="valor5" />
                                </div>
                            </div>
                            <p className={styles.parra_titulo}><b>Primero el cliente</b></p>
                            <p className={styles.parra_valores}>Estamos enfocados y comprometidos con la satisfacción total del cliente.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.enterate_fondo}>
                    <div class={styles.container_enterate}>
                        <h2>Entérate más de nosotros</h2>
                        <p>Conoce todos los planes y beneficios</p>
                        <div className={styles.container_input}>
                            <input placeholder="Correo Electrónico" type="email" name="email" />
                            <button type="button" className={styles.btn1}>Enviar</button>
                        </div>
                    </div>
            </div>
        </body>
    )
}
export default Contenido_nosotros;