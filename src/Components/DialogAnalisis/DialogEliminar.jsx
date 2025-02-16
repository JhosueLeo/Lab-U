import React from 'react';
import { Dialog } from 'primereact/dialog';

const DialogEliminar = ({ visibleEliminar, setVisibleEliminar }) => {
    return (
        <Dialog visible={visibleEliminar} onHide={() => setVisibleEliminar(false)}>
            <h1>HOLA</h1>
        </Dialog>
    );
};

export default DialogEliminar;