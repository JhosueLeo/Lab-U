import React, { useState } from 'react';
import LabComp from '../../Components/LaboratiorioComponent/LabComp.jsx';
import styles from '../../css/style_sedes.module.css';
import laboratoriesData from '../../data/laboratoriesData.jsx';

export default function Laboratorio({ setMapUrl,
  selectedProvince,
  selectedDistrict,
  applyFilter,
  setSelectedCoordinates}) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelectLaboratory = (laboratory) => {
    console.log('Laboratorio seleccionado:', laboratory);
    setSelectedCoordinates(laboratory.coordenadas); 
  };
  const filteredLaboratories = applyFilter
    ? laboratoriesData.filter((lab) => {
        const matchesProvince = !selectedProvince || lab.province === selectedProvince;
        const matchesDistrict = !selectedDistrict || lab.district === selectedDistrict;

        return matchesProvince && matchesDistrict;
      })
    : laboratoriesData;

  return (
    <>
      <div className={styles.ContenedorLab}>
        {filteredLaboratories.map((lab) => (
          <LabComp
          key={lab.id}
          styles={styles}
          id={lab.id}
          laboratorio={lab.laboratorio}
          coordenadas={lab.coordenadas}
          local={lab.local}
          direccion={lab.direccion}
          url={lab.url}
          setMapUrl={setMapUrl}
          isSelected={selectedCard === lab.id} 
          setSelectedCard={setSelectedCard}
          onSelect={handleSelectLaboratory}
          />
        ))}
      </div>
    </>
  );
}
