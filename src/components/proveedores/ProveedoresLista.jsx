import React from 'react'
import ProveedoresFila from './ProveedoresFila'

const ProveedoresLista = ({proveedores,handleDelete,handleEdit}) =>{
    return(
        proveedores.map((proveedor,index) => <ProveedoresFila proveedor={proveedor} index={index} handleDelete={handleDelete} handleEdit={handleEdit}/>)
    )
}

export default ProveedoresLista;