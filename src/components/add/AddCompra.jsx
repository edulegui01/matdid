import React from 'react';
import Main from '../Main/Main';
import FormCompraVenta from '../forms/FormCompraVenta';




const AddCompra = () => {
    return (  
        <Main show="d-none" title="Agregar compra" contenido={<FormCompraVenta/>} />        
    );
}
 
export default AddCompra;