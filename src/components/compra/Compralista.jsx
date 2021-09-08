import React from 'react';
import CompraFila from './CompraFila'


const CompraLista = (props) =>{
    return(
        props.compras.map(compra => <CompraFila compra={compra}/>)
    )
}

export default CompraLista;