import React from 'react';
import VentaFila from './VentaFila'


const CompraLista = (props) =>{
    return(
        props.ventas.map(venta => <VentaFila venta={venta}/>)
    )
}

export default CompraLista;