import React, {useState,useEffect} from 'react';
import Main from '../components/Main/Main';
import customFetcher from '../helpers/fetch';
import TableOchoCol from '../components/tables/TableOchoCol';
import VentaLista from '../components/venta/VentaLista';
import BaseCompraVenta from '../components/baseCompraVenta/BaseCompraVenta';
import EditContent from '../components/editForms/EditContent';
import FormCompraVenta from '../components/forms/FormCompraVenta';
import {confirmDeleteNotification,notification} from '../helpers/alert';





const Ventas = () => {
    
    const [ventas, setVentas] = useState({results:[],count:0})
    const [clientes, setClientes] = useState([])
    const [empleados, setEmpleados] = useState([])
    const [productos, setProductos] = useState([])
    const [modalState, setModalState] = useState(false)
    const [rowOfEdit, setRowOfEdit] = useState(null)
    const [detalleToEdit,setDetalleToEdit] = useState([{sfsadf:"fasdfsda"}])

    const tableHead = {primeraColumna:'#',segundaColumna:'fecha',terceraColumna:'Nombre',
    cuartaColumna:'Sector',quintaColumna:'Ciudad',sextaColumna:'Encargado',
    septimaColumna:'Tipo',octavaColumna:'Total',boton1:'',boton2:''}

    const accion = {accion1:'venta',accion2:'muestra'}


    const handleEdit = (venta) => {
        setModalState(!modalState)
        fechingRowToEdit(venta)
        fechingDetalleVentaToEdit(venta)

        
        
    }

    async function fechingListVenta(offset){
        const  {response,data}  = await customFetcher(`/ventas/ventas/?offset=${offset}`)
        //const body = await response.json();
        console.log(data)
        setVentas(data)
    }
    useEffect(() =>{
        fechingListVenta();
        fechingListClientes();
        fechingListEmpleados();
        fechingListProductos();

    },[])

    async function fechingDeleteVenta(idVentaToDelete){
        const {response,data} = await customFetcher(`/ventas/ventas/${idVentaToDelete}`,null,'DELETE')
        //const body = await response.json()
        //console.log(body)
        notification('Eliminada',data.mensaje,'success')

    }



    const deleteVentaRow = (ventaToDelete) => {
        console.log(ventas.results[ventaToDelete].id)
        let idCompraToDelete = ventas.results[ventaToDelete].id
        ventas.results.splice(ventaToDelete,1)
        setVentas({...ventas,results:ventas.results})
        fechingDeleteVenta(idCompraToDelete)
    }

    const handleDelete = (ventaToDelete) =>{
        
        confirmDeleteNotification(() => deleteVentaRow(ventaToDelete))

        
        
    }

    async function fechingRowToEdit(venta){
        const {response,data} = await customFetcher(`/ventas/ventas_edit/${venta.id}`)
        //const bodyVenta = await responseVenta.json()
        data['id_proveedor']= data['id_cliente']
        delete data['id_cliente']

        setRowOfEdit(data)



    }

    async function fechingDetalleVentaToEdit(venta){
        const {response,data} = await customFetcher(`/ventas/detalle_venta_edit/${venta.id}`)
        //const bodyDetalleVenta = await responseDetalleVenta.json()
        //console.log(bodyDetalleVenta)
        setDetalleToEdit(data)
    }

    async function fechingListClientes(){
        const  {response,data}  = await customFetcher(`/cobros/clientes_venta`)
        //const body = await response.json();
        setClientes(data)
        
    }
    async function fechingListEmpleados(){
        const  {response,data}  = await customFetcher(`/empleados/empleados_compra`)
        //const body = await response.json();
        setEmpleados(data)
        
    }
    
    async function fechingListProductos(){
        const  {response,data}  = await customFetcher(`/productos/productos_compra`)
        //const body = await response.json();
        setProductos(data)
        
    }


    
    return ( 
        <>
            <BaseCompraVenta title="Ventas" titleAdd="Agregar Venta" clienteProveedor="Cliente" count={ventas.count} 
            option1={clientes} option2={empleados} option3={productos} accion={accion} contenido ={<FormCompraVenta option1={clientes} accion={accion} option2={empleados} option3={productos} clienteProveedor="Cliente"/>}
            fechingList={fechingListVenta} tipoLista={<VentaLista handleEdit={handleEdit} modalState={modalState} 
            ventas={ventas.results} changeModalState={setModalState} handleDelete={handleDelete}></VentaLista>}
            tableHead={tableHead}/>
            <EditContent modalState={modalState} changeModalState={setModalState} titleAdd="Editar"
            editForm={<FormCompraVenta option1={clientes} accion={accion} 
            option2={empleados} option3={productos} 
            clienteProveedor="Proveedor" rowOfEdit={rowOfEdit} detalleToEdit={detalleToEdit}
            flag={true}/>}/>
        </>
     );
}

export default Ventas;