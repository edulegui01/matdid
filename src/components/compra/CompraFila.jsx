import React from 'react';



const CompraFila = (props) =>{
    return(
        <tbody>
            <tr >
                <th scope="row">{props.compra.id}</th>
                    <td>{props.compra.fecha}</td>
                    <td>{props.compra.proveedor}</td>
                    <td> {props.compra.ciudad}</td>
                    <td>{props.compra.encargado}</td>
                    <td>{props.compra.accion}</td>
                    <td>{props.compra.monto_total}</td>
                    <td><button className="btn btn-warning btn-sm">Editar</button></td>
                    <td><button className="btn btn-danger btn-sm">borrar</button></td>
            </tr>
                    
                    
        </tbody>
    )
}


export default CompraFila;