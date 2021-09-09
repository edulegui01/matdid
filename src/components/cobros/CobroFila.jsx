import React from 'react';



const CobroFila = (props) =>{
    return(
        <tbody>
            <tr >
                <th scope="row">{props.cobro.id}</th>
                    <td>{props.cobro.fecha}</td>
                    <td>{props.cobro.cliente}</td>
                    <td> {props.cobro.sector}</td>
                    <td>{props.cobro.ciudad}</td>
                    <td>{props.cobro.encargado}</td>
                    <td>{props.cobro.monto}</td>
                    <td><button className="btn btn-warning btn-sm">Editar</button></td>
                    <td><button className="btn btn-danger btn-sm">borrar</button></td>
            </tr>
                    
                    
        </tbody>
    )
}


export default CobroFila;