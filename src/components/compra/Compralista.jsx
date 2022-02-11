import React from 'react';
import CompraFila from './CompraFila'


const CompraLista = ({compras,changeModalState,modalState,setRowOfEdit,handleDelete}) =>{
    try{
        return(
        
                compras.map((compra,index) => <CompraFila compra={compra} changeModalState={changeModalState} 
                modalState={modalState} setRowOfEdit={setRowOfEdit} handleDelete={handleDelete} index={index}/>)
        )
    }
    catch(error){
        return <>No es posible acceder a los datos</>
    }
}

export default CompraLista;