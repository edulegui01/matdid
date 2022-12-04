import React from 'react'
import EmpleadoFila from './EmpleadoFila';

const EmpleadoLista = ({empleados,handleDelete,handleEdit}) =>{
    return(
        empleados.map((empleado,index) => <EmpleadoFila empleado={empleado} index={index} handleDelete={handleDelete} handleEdit={handleEdit}/>)
    )
}

export default EmpleadoLista;