import React from 'react'


const EmpleadoFila = ({index, empleado, handleDelete,handleEdit}) =>{
    return(
        <tbody>
            <tr >
                <th scope="row" >{empleado.id}</th>
                    <td >{empleado.nombre}</td>
                    <td >{empleado.cedula}</td>
                    <td >{empleado.telefono}</td>
                    <td > {empleado.localidad}</td>
                    <td >{empleado.rol}</td>
                    <td><button className="btn btn-warning btn-sm" onClick={() => handleEdit(empleado)}>Editar</button></td>
                    <td><button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>borrar</button></td>
            </tr>
                    
                    
        </tbody>
    )
}


export default EmpleadoFila;