import React from 'react'
import ProductoFila from './ProductoFil';

const ProductosLista = ({productos,handleDelete,handleEdit}) =>{
    return(
        productos.map((producto,index) => <ProductoFila producto={producto} index={index} handleDelete={handleDelete} handleEdit={handleEdit}/>)
    )
}

export default ProductosLista;