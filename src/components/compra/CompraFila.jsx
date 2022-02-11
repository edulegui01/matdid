import React from 'react';
import confirmDeleteNotification from '../../helpers/alert';



const CompraFila = ({compra,changeModalState,modalState,setRowOfEdit,handleDelete,index}) =>{
    return(
        <tbody>
            <tr >
                <th scope="row">{compra.id}</th>
                    <td>{compra.fecha}</td>
                    <td>{compra.proveedor}</td>
                    <td> {compra.ciudad}</td>
                    <td>{compra.encargado}</td>
                    <td>{compra.accion}</td>
                    <td>{compra.monto_total}</td>
                    <td><button className="btn btn-warning btn-sm" 
                     onClick={() => setRowOfEdit(compra)}>Editar</button></td>
                    <td><button className="btn btn-danger btn-sm" onClick={() =>handleDelete(index)}>borrar</button></td>
            </tr>
                    
                    
        </tbody>
    )
}


export default CompraFila;