import React from 'react'


const ClienteFila = ({index, cliente, handleDelete,handleEdit}) =>{
    return(
        <tbody>
            <tr >
                <th scope="row" >{cliente.id}</th>
                    <td >{cliente.nombre}</td>
                    <td >{cliente.ruc}</td>
                    <td > {cliente.razon_social}</td>
                    <td >{cliente.localidad}</td>
                    <td >{cliente.total_pagado}</td>
                    <td >{cliente.deuda_por_pagar}</td>
                    <td><button className="btn btn-warning btn-sm" onClick={() => handleEdit(cliente)}>Editar</button></td>
                    <td><button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>borrar</button></td>
            </tr>
                    
                    
        </tbody>
    )
}


export default ClienteFila;