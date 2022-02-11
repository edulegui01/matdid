import React from 'react';
import CobroFila from './CobroFila';


const CobroLista = (props) =>{
    try{
        return(
        
            props.cobros.map(cobro => <CobroFila cobro={cobro}/>)
        )
    }
    catch(error){
        return <>No es posible acceder a los datos</>
    }
}

export default CobroLista;