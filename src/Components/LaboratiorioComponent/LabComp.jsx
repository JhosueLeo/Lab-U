import React from 'react';
import direccion_img from '../../img/direccion1.svg';
import hospital_img from '../../img/hospital.svg';

export default function LabComp({
  styles,
  id,
  laboratorio,
  direccion,
  local,
  onSelect,
  isSelected,
  setSelectedCard,
  coordenadas
}) {
  const handleClick = () => {
    if (isSelected) {
      setSelectedCard(null);
  onSelect({ laboratorio, direccion, local, coordenadas: null });
    } else {
      setSelectedCard(id);
      onSelect({ laboratorio, direccion, local, coordenadas: { lat: coordenadas[0], lng: coordenadas[1] } });
    }
  };

  return (
    <>
      <div
        className={`${styles.containercardmapa} ${styles.pointer}`}
        onClick={handleClick}
        style={{ opacity: isSelected ? 0.8 : 1 }}
      >
        <div style={{ padding: '15px', paddingTop: '0px' }}>
          <div className={`${styles.TitInfg} flex`}>
            <img className="mr-3" src={hospital_img} alt="" />
            <div className={`${styles.TitInf1}`}>
              <h3 className={`${styles.Laboratorio} flex`}>{laboratorio}</h3>
              <p style={{ margin: '0', textDecoration: 'none' }}>{local}</p>
            </div>
            <div className={styles.container_direccion}>
              <div className={styles.container_circulo}>
                <div className={styles.circulo}></div>
                <img className="" src={direccion_img} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: '15px', paddingTop: '0px' }}>
          <div className={`${styles.TitInf} flex gap-3"`}>
            <p>{direccion}</p>
          </div>
        </div>
      </div>
    </>
  );
}
