import React from 'react';
import CobroFila from './CobroFila';


const CobroLista = (props) =>{
    return(
        props.cobros.map(cobro => <CobroFila cobro={cobro}/>)
    )
}

export default CobroLista;