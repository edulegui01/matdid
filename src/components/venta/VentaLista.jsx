import React from 'react';
import VentaFila from './VentaFila'


const CompraLista = ({ventas,handleEdit, modalState,changeModalState,handleDelete}) =>{
    return(
        ventas.map((venta,index) => <VentaFila venta={venta} handleEdit={handleEdit} 
        modalState={modalState} changeModalState={changeModalState} handleDelete={handleDelete} index={index} />)
    )
}

export default CompraLista;