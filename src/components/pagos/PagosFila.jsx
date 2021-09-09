import React from 'react'


const PagosFila = (props) =>{
    return(
        <tbody>
            <tr >
                <th scope="row" >{props.pago.id}</th>
                    <td >{props.pago.fecha}</td>
                    <td >{props.pago.proveedor}</td>
                    <td > {props.pago.ciudad}</td>
                    <td >{props.pago.encargado}</td>
                    <td >{props.pago.monto}</td>
                    <td><button className="btn btn-warning btn-sm">Editar</button></td>
                    <td><button className="btn btn-danger btn-sm">borrar</button></td>
            </tr>
                    
                    
        </tbody>
    )
}


export default PagosFila;