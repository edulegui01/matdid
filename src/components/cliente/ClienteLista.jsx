import React from 'react'
import ClienteFila from './ClienteFila';

const ClienteLista = ({clientes,handleDelete,handleEdit}) =>{
    return(
        clientes.map((cliente,index) => <ClienteFila cliente={cliente} index={index} handleDelete={handleDelete} handleEdit={handleEdit}/>)
    )
}

export default ClienteLista;