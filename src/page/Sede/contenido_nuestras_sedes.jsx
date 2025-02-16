import {useState} from "react";
import Laboratorio from "./Laboratorio";
import Mapa from "./Mapa";
import flechita from "../../img/flecha-abajo.svg";
import trashIcon from "../../img/Vector.svg";
import styles from "../../css/style_sedes.module.css";
import banner3 from "../../img/banner3.svg";
import { useFilterCartsMarkers } from "../../Components/logicaNuestrasSedes/Filtrado_Sedes_Marcadores";
import { provincesData } from "../../data/provincesData";
import { allMarkers } from "../../data/allMarkers";
function Contenido_nuestras_sedes() {
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);
  const {
    selectedProvince,
    setSelectedProvince,
    selectedDistrict,
    setSelectedDistrict,
    districtsForProvince,
    filtersApplied,
    filteredMarkers,
    handleApplyFilter,
    handleResetFilters
  } = useFilterCartsMarkers();

  return (
    <body>
      <div className="SeparadorHeader">
      </div>
      <div className={styles.img}>
        <div className={styles.ContenedorContactoBaner1}>
          <img src={banner3} className={styles.baner} alt="Banner" />
        </div>

        <div className={styles.container_nosotros}>
          <p className={styles.titulo1}>
            <span className={styles.span1}>Inicio</span> / Sedes
          </p>

          <div className={styles.separacion2}>
            <h1 className={styles.text_baner}>
              Descubre nuestras <span className={styles.span2}>sedes</span>
            </h1>
          </div>

          <div className={styles.separacion3}>
            <p className={styles.texto_abajo}>
              Encuentra la sede más cercana y descubre nuestro compromiso con tu salud.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.contenedornuestrasede} style={{ border: "1px solid-black" }}>
        <div className={styles.contenedorradiobutton}>
          <h4>Encuentra la sede más cerca de ti:</h4>
          <div className={styles.container_btnall}>
            <div className={styles.selectcontainer}>
              <p className={styles.TextoProvincia}>Provincia</p>
              <select
                name="selectedProvince"
                id="selectedProvince"
                className={styles.TextG1}
                onChange={(e) => setSelectedProvince(e.target.value)}
                value={selectedProvince}
              >
                <option value="" disabled>
                  Seleccionar provincia
                </option>
                {provincesData.map((province) => (
                  <option key={province.name} value={province.name}>
                    {province.name}
                  </option>
                ))}
              </select>
              <img src={flechita} alt="flechita" className={styles.arrowicon} />
            </div>
            <div className={styles.selectcontainer}>
              <p className={styles.TextoProvincia}>Distrito</p>
              <select
                name="selectedDistrict"
                id="selectedDistrict"
                className={styles.TextG2}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                value={selectedDistrict}
              >
                <option value="" disabled>
                  Seleccionar distrito
                </option>
                {districtsForProvince.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              <img src={flechita} alt="flechita" className={styles.arrowicon} />
            </div>

            <div className={styles.container_btn0}>
              <button className={styles.btnAplicar} onClick={handleApplyFilter}>
                Aplicar filtro
              </button>
            </div>
            <div className={styles.container_btn2}>
              <button className={styles.btnReset} onClick={handleResetFilters}>
                <img className={styles.ImagenTrash} src={trashIcon} alt="trash" />
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.contenedordireccion} flex gap-3 w-full justify-content-center`}>
          <div>
            <Laboratorio
              
              selectedProvince={selectedProvince}
              selectedDistrict={selectedDistrict}
              applyFilter={filtersApplied}
              setSelectedCoordinates={setSelectedCoordinates}
            />
          </div>

          <div>
          <Mapa allMarkers={allMarkers} filteredMarkers={filteredMarkers} selectedCoordinates={selectedCoordinates}  />
          </div>
        </div>
      </div>

      <div className={styles.ayudarte_fondo}>
        <div className={styles.container_ayudarte}>
          <h2>Estamos para ayudarte</h2>
          <p>Conoce todos los planes y beneficios.</p>
          <div className={styles.container_input}>
            <input placeholder="Correo Electrónico" type="email" name="email" />
            <button type="button" className={styles.btn1}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Contenido_nuestras_sedes;
