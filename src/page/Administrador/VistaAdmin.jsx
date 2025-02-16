// VistaAdmin.js
import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "../../css/VistaAdmin.css";
import DialogEditar from "../../Components/DialogAnalisis/DialogEditar.jsx";
import DialogCrear from "../../Components/DialogAnalisis/DialogCrear.jsx";
import DialogEliminar from "../../Components/DialogAnalisis/DialogEliminar.jsx";

export default function VistaAdmin() {
  const data = [
    {
      codigo: 1,
      nombre: "Análisis de sangre",
      comentario: "hdfhdbghbgfxhgsfs",
    },
  ];
  const dataSede = [
    {
      codigo: 1,
      name: "Análisis de sangre",
      category: "category",
      quantity: "quantity",
    },
  ];
  const dataUsuario = [
    {
      codigo: 1,
      nombre: "Análisis de sangre",
      correo: "correo@gmail.com",
      contraseña: "hdfhdbghbgfxhgsfs"
    },
  ];
  const dataAdmi = [
    {
      codigo: 1,
      nombre: "Análisis de sangre",
      correo: "correo@gmail.com",
      contraseña: "hdfhdbghbgfxhgsfs"
    },
  ];
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleCrear, setVisibleCrear] = useState(false);
  const [visibleEliminar, setVisibleEliminar] = useState(false);

  const handleEditButtonClick = () => {
    setVisibleEdit(true);
  };

  const handleCrearButtonClick = () => {
    setVisibleCrear(true);
  };

  const handleEliminarButtonClick = () => {
    setVisibleEliminar(true);
  };

  const botones = () => {
    return (
      <>
        <Button
          icon="pi pi-pencil text-xl"
          className="editar1"
          onClick={handleEditButtonClick}
        />

        <Button
          icon="pi pi-plus text-xl"
          className="crear1"
          onClick={handleCrearButtonClick}
        />

        <Button
          icon="pi pi-trash text-xl"
          className="eliminar1"
          onClick={handleEliminarButtonClick}
        />
      </>
    );
  };

  return (
    <>
      <div className="contenedor_vista">
        <Accordion activeIndex={0}>
          <AccordionTab className="acordion_admin" header="Administrador" paginator>
            <DataTable value={dataAdmi} tableStyle={{ minWidth: "50rem" }}>
              <Column field="codigo" header="Código"></Column>
              <Column field="nombre" header="Nombre"></Column>
              <Column field="correo" header="Correo"></Column>
              <Column field="contraseña" header="Contraseña"></Column>
              <Column field="accion" header="Acción" body={botones}></Column>
            </DataTable>
          </AccordionTab>
          <AccordionTab header="Sedes">
            <DataTable value={dataSede} tableStyle={{ minWidth: "50rem" }}>
              <Column field="codigo" header="Código"></Column>
              <Column field="name" header="Name"></Column>
              <Column field="category" header="Category"></Column>
              <Column field="quantity" header="Quantity"></Column>
              <Column field="accion" header="Acción" body={botones}></Column>
            </DataTable>
          </AccordionTab>
          <AccordionTab header="Análisis">
            <DataTable value={data} tableStyle={{ minWidth: "50rem" }}>
              <Column field="id" header="Id"></Column>
              <Column field="nombre" header="Name"></Column>
              <Column field="comentario" header="Comentario"></Column>
              <Column field="accion" header="Acción" body={botones}></Column>
            </DataTable>
          </AccordionTab>
          <AccordionTab header="Usuarios">
            <DataTable value={dataUsuario} tableStyle={{ minWidth: "50rem" }}>
              <Column field="codigo" header="Código"></Column>
              <Column field="nombre" header="Nombre"></Column>
              <Column field="correo" header="Correo"></Column>
              <Column field="contraseña" header="Contraseña"></Column>
              <Column field="accion" header="Acción" body={botones}></Column>
            </DataTable>
          </AccordionTab>
        </Accordion>
        <DialogEditar
          visibleEdit={visibleEdit}
          setVisibleEdit={setVisibleEdit}
        />
        <DialogCrear
          visibleCrear={visibleCrear}
          setVisibleCrear={setVisibleCrear}
        />

        <DialogEliminar
          visibleEliminar={visibleEliminar}
          setVisibleEliminar={setVisibleEliminar}
        />
      </div>
    </>
  );
}
