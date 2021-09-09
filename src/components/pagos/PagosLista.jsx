import React from 'react'
import PagosFila from './PagosFila';

const PagosLista = (props) =>{
    return(
        props.pagos.map(pago => <PagosFila pago={pago}/>)
    )
}

export default PagosLista;