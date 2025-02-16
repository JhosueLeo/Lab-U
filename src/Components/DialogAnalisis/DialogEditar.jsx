import React from 'react';
import { Dialog } from 'primereact/dialog';

const DialogEditar = ({ visibleEdit, setVisibleEdit }) => {
    return (
        <Dialog visible={visibleEdit} onHide={() => setVisibleEdit(false)}>
            <h1>HOLA</h1>
        </Dialog>
    );
};

export default DialogEditar;
