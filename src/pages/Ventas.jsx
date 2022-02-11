import React, {useState,useEffect} from 'react';
import Main from '../components/Main/Main';
import fetchMatdid from '../helpers/fetch';
import TableOchoCol from '../components/tables/TableOchoCol';
import VentaLista from '../components/venta/VentaLista';
import BaseCompraVenta from '../components/baseCompraVenta/BaseCompraVenta';




const Ventas = () => {
    
    const [ventas, setVentas] = useState({results:[],count:0})
    const [clientes, setClientes] = useState([])
    const [empleados, setEmpleados] = useState([])
    const [productos, setProductos] = useState([])

    const tableHead = {primeraColumna:'#',segundaColumna:'fecha',terceraColumna:'Nombre',
    cuartaColumna:'Sector',quintaColumna:'Ciudad',sextaColumna:'Encargado',
    septimaColumna:'Tipo',octavaColumna:'Total',boton1:'',boton2:''}

    const accion = {accion1:'venta',accion2:'muestra'}


    const handleUpdate = () =>{
        
    }

    async function fechingListVenta(offset){
        const  response  = await fetchMatdid(`/ventas/ventas/?offset=${offset}`)
        const body = await response.json();
        setVentas(body)
    }
    useEffect(() =>{
        fechingListVenta();
        fechingListClientes();
        fechingListEmpleados();
        fechingListProductos();

    },[])

    async function fechingListClientes(){
        const  response  = await fetchMatdid(`/cobros/clientes_venta`)
        const body = await response.json();
        setClientes(body)
        
    }
    async function fechingListEmpleados(){
        const  response  = await fetchMatdid(`/empleados/empleados_compra`)
        const body = await response.json();
        setEmpleados(body)
        
    }
    
    async function fechingListProductos(){
        const  response  = await fetchMatdid(`/productos/productos_compra`)
        const body = await response.json();
        setProductos(body)
        
    }


    
    return ( 
        <BaseCompraVenta title="Ventas" titleAdd="Agregar Venta" clienteProveedor="Cliente" count={ventas.count} 
        option1={clientes} option2={empleados} option3={productos} accion={accion}
        fechingList={fechingListVenta} tipoLista={<VentaLista ventas={ventas.results}></VentaLista>}
        tableHead={tableHead}/>
     );
}

export default Ventas;