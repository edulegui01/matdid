import React from 'react'


const ProductosFila = ({index, producto, handleDelete,handleEdit}) =>{
    return(
        <tbody>
            <tr >
                <th scope="row" >{producto.id}</th>
                    <td >{producto.fecha}</td>
                    <td >{producto.nombre}</td>
                    <td > {producto.autor}</td>
                    <td >{producto.costo}</td>
                    <td >{producto.precio}</td>
                    <td >{producto.stock}</td>
                    <td><button className="btn btn-warning btn-sm" onClick={() => handleEdit(producto)}>Editar</button></td>
                    <td><button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>borrar</button></td>
            </tr>
                    
                    
        </tbody>
    )
}


export default ProductosFila;