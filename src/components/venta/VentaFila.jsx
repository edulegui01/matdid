import React from 'react';



const VentaFila = ({venta,handleEdit, modalState,changeModalState,index,handleDelete}) =>{
    return(
        <tbody>
            <tr >
                <th scope="row" >{venta.id}</th>
                    <td >{venta.fecha}</td>
                    <td >{venta.cliente}</td>
                    <td > {venta.sector}</td>
                    <td > {venta.ciudad}</td>
                    <td >{venta.encargado}</td>
                    <td >{venta.accion}</td>
                    <td >{venta.monto_total}</td>
                    <td><button className="btn btn-warning btn-sm" onClick={() => handleEdit(venta)}>Editar</button></td>
                    <td><button className="btn btn-danger btn-sm" onClick={() =>handleDelete(index)}>borrar</button></td>
            </tr>
                    
                    
        </tbody>
    )
}


export default VentaFila;