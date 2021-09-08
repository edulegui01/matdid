import React, { useEffect,useState } from 'react';
import Main from '../Main/Main';
import FormCompraVenta from '../forms/FormCompraVenta';
import fetchMatdid from '../../helpers/fetch';




const AddCompra = () => {
    
    const [proveedores, setProveedores] = useState([true])
    let permisoCarga = false
    
    async function fechingListProveedores(){
        const  response  = await fetchMatdid(`/proveedores/proveedores_compra`)
        const body = await response.json();
        setProveedores(body)
        permisoCarga=true
    }

    useEffect(() =>{
        fechingListProveedores()
    },[])


    
    return (  
        <Main show="d-none" title="Agregar compra" contenido={<FormCompraVenta proveedores={proveedores} permisoCarga={permisoCarga}/>} />        
    );
}
 
export default AddCompra;