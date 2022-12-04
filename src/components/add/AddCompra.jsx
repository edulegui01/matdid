import React, { useEffect,useState } from 'react';
import Main from '../Main/Main';
import FormCompraVenta from '../forms/FormCompraVenta';
import customFetcher from '../../helpers/fetch';




const AddCompra = () => {
    
    const [proveedores, setProveedores] = useState([])
    const [empleados, setEmpleados] = useState([])
    const [productos, setProductos] = useState([])
    
    
    async function fechingListProveedores(){
        const  response  = await customFetcher(`/proveedores/proveedores_compra`)
        const body = await response.json();
        setProveedores(body)
        
    }
    
    async function fechingListEmpleados(){
        const  response  = await customFetcher(`/empleados/empleados_compra`)
        const body = await response.json();
        setEmpleados(body)
        
    }
    
    async function fechingListProductos(){
        const  response  = await customFetcher(`/productos/productos_compra`)
        const body = await response.json();
        setProductos(body)
        
    }


    useEffect(() =>{
        fechingListProveedores()
        fechingListEmpleados()
        fechingListProductos()
    },[])


    
    return (  
        <Main show="d-none" title="Agregar compra" contenido={<FormCompraVenta proveedores={proveedores} 
        empleados={empleados} productos={productos} />} />        
    );
}
 
export default AddCompra;