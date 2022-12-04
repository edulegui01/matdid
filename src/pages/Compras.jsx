import React,{useState,useEffect} from 'react';
import Main from '../components/Main/Main';
import customFetcher from '../helpers/fetch';
import TableOchoCol from '../components/tables/TableOchoCol';
import CompraLista from '../components/compra/Compralista';
import Content from '../components/content/Content';
import Pagination from '../components/pagination/Pagination';
import FormCompraVenta from '../components/forms/FormCompraVenta';
import BaseCompraVenta from '../components/baseCompraVenta/BaseCompraVenta';
import EditContent from '../components/editForms/EditContent';
import EditFormCompra from '../components/editForms/EditFormCompra'
import Swal from "sweetalert2";
import {confirmDeleteNotification,notification} from '../helpers/alert';






const Compras = () => {
    
    const [compras,setCompras] = useState({results:[],count:0})

    const config = {
        method: 'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }
    


                                           
    //const [currentPage, setcurrentPage] = useState(1)

    async function fechingListCompra(offset){
        try{
            const {response,data}  = await customFetcher(`/compras/compras/?offset=${offset}`,config)
            console.log(response.data)
            setCompras(data)
        }catch(error){
            console.log(error)
        }
        
        
    }

    useEffect(() =>{
        fechingListCompra();
        fechingListProveedores();
        fechingListEmpleados();
        fechingListProductos();
    },[])

    const tableHead = {primeraColumna:'#',segundaColumna:'fecha',terceraColumna:'proveedor',
    cuartaColumna:'ciudad',quintaColumna:'Encargado',sextaColumna:'Acción',septimaColumna:'Total'}

    const editImput = ['Proveedor','Ciudad','Encargado','Accion','Total']

    const accion = {accion1:'compra', accion2:'devolucion'}
    

    
   

    //const numpage=Math.ceil(compras.count/6)
    

    /*const handlePagination = (page) =>{
        let offset = page===1 ? 0:(page-1)*6
        fechingListCompra(offset);
        setcurrentPage(page);

        
    }*/


    const [proveedores, setProveedores] = useState([])
    const [empleados, setEmpleados] = useState([])
    const [productos, setProductos] = useState([])
    const [modalState, setModalState] = useState(false)
    const [rowOfEdit, setRowOfEdit] = useState(null)
    const [detalleToEdit,setDetalleToEdit] = useState([{sfsadf:"fasdfsda"}])
    const [idCompra,setIdCompra] = useState()
    
    
    const costoProduct = {}
    
    try{
        productos.forEach(producto => costoProduct[producto.id]=producto.costo)

    }catch(error){

    }

    //let contenido=<FormCompraVenta option1={proveedores} 
    //accion={accion} option2={empleados} option3={productos} clienteProveedor="Proveedor"/>




    const handleEdit = (compra) => {
        setModalState(!modalState)
        fechingRowToEdit(compra)
        fechingDetalleCompraToEdit(compra)

        
        
    }

    async function fechingDeleteCompra(idCompraToDelete){
        const {response,data} = await customFetcher(`/compras/compras/${idCompraToDelete}`,null,'DELETE')
        //const body = await response.json()
        //console.log(body)
        notification('Eliminada',data.mensaje,'success')

    }

    const deleteCompraRow = (compraToDelete) => {
        console.log(compras.results[compraToDelete].id)
        let idCompraToDelete = compras.results[compraToDelete].id
        compras.results.splice(compraToDelete,1)
        setCompras({...compras,results:compras.results})
        fechingDeleteCompra(idCompraToDelete)
    }

    const handleDelete = (compraToDelete) =>{
        
        confirmDeleteNotification(() => deleteCompraRow(compraToDelete))

        
        
    }


    async function fechingRowToEdit(compra){
        const {responseCompra,data} = await customFetcher(`/compras/compras_edit/${compra.id}`)
        //const bodyCompra = await responseCompra.json()
        setRowOfEdit(data)
        setIdCompra(compra.id)

        //const responseDetalleCompra = await fetchMatdid()


    }

    async function fechingDetalleCompraToEdit(compra){
        const {responseDetalleCompra,data} = await customFetcher(`/compras/detalle_compra_edit/${compra.id}`)
        //const bodyDetalleCompra = await responseDetalleCompra.json()
        setDetalleToEdit(data)
    }


    
    async function fechingListProveedores(){
        const  {response,data}  = await customFetcher(`/proveedores/proveedores_compra`)
        //const body = await response.json();
        setProveedores(data)
        
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
            <BaseCompraVenta title="Compras" titleAdd="Agregar Compra" clienteProveedor="Proveedor" maximun_with="1000px"
            count={compras.count} contenido={<FormCompraVenta option1={proveedores} accion={accion} option2={empleados} option3={productos} clienteProveedor="Proveedor" />} accion={accion}
            fechingList={fechingListCompra} tipoLista={<CompraLista compras={compras.results} modalState={modalState}
            changeModalState={setModalState} handleEdit={handleEdit} handleDelete={handleDelete}></CompraLista>}
            tableHead={tableHead}/>
            <EditContent modalState={modalState} changeModalState={setModalState} titleAdd="Editar"
            editForm={<FormCompraVenta option1={proveedores} accion={accion} 
            option2={empleados} option3={productos} 
            clienteProveedor="Proveedor" rowOfEdit={rowOfEdit} detalleToEdit={detalleToEdit} idCompra={idCompra}
            flag={true}/>}/>
        </>

     );
}
 
export default Compras;