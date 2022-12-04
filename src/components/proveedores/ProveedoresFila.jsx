import React from 'react'


const ProveedoresFila = ({index, proveedor, handleDelete,handleEdit}) =>{
    return(
        <tbody>
            <tr >
                <th scope="row" >{proveedor.id}</th>
                    <td >{proveedor.nombre}</td>
                    <td >{proveedor.ruc}</td>
                    <td > {proveedor.razon_social}</td>
                    <td >{proveedor.localidad}</td>
                    <td >{proveedor.total_cobrado}</td>
                    <td >{proveedor.deuda_por_cobrar}</td>
                    <td><button className="btn btn-warning btn-sm" onClick={() => handleEdit(proveedor)}>Editar</button></td>
                    <td><button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>borrar</button></td>
            </tr>
                    
                    
        </tbody>
    )
}


export default ProveedoresFila;