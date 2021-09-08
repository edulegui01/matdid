import React from 'react';



const VentaFila = (props) =>{
    return(
        <tbody>
            <tr >
                <th scope="row" >{props.venta.id}</th>
                    <td >{props.venta.fecha}</td>
                    <td >{props.venta.cliente}</td>
                    <td > {props.venta.sector}</td>
                    <td > {props.venta.ciudad}</td>
                    <td >{props.venta.encargado}</td>
                    <td >{props.venta.accion}</td>
                    <td >{props.venta.monto_total}</td>
                    <td><button className="btn btn-warning btn-sm">Editar</button></td>
                    <td><button className="btn btn-danger btn-sm">borrar</button></td>
            </tr>
                    
                    
        </tbody>
    )
}


export default VentaFila;