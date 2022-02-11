import React,{useState,useEffect} from 'react';
import Main from '../components/Main/Main';
import fetchMatdid from '../helpers/fetch';
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
    


                                           
    //const [currentPage, setcurrentPage] = useState(1)

    async function fechingListCompra(offset){
        const  response  = await fetchMatdid(`/compras/compras/?offset=${offset}`)
        const body = await response.json();
        setCompras(body)
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
    const [rowOfEdit, setRowOfEdit] = useState()
    
    
    const costoProduct = {}
    
    productos.forEach(producto => costoProduct[producto.id]=producto.costo)

    //let contenido=<FormCompraVenta option1={proveedores} 
    //accion={accion} option2={empleados} option3={productos} clienteProveedor="Proveedor"/>

    const [contenido,setContenido] = useState(<FormCompraVenta option1={proveedores} 
        accion={accion} option2={empleados} option3={productos} clienteProveedor="Proveedor"/>
    )

    const handleEdit = (compra) => {
        setModalState(!modalState)
        setRowOfEdit(compra)
        
    }

    async function fechingDeleteCompra(idCompraToDelete){
        const response = await fetchMatdid(`/compras/compras/${idCompraToDelete}`,null,'DELETE')
        const body = await response.json()
        console.log(body)
        notification('Eliminada',body.mensaje,'success')

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

    
    async function fechingListProveedores(){
        const  response  = await fetchMatdid(`/proveedores/proveedores_compra`)
        const body = await response.json();
        setProveedores(body)
        
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
        <>
            <BaseCompraVenta title="Compras" titleAdd="Agregar Compra" clienteProveedor="Proveedor" 
            count={compras.count} contenido={<FormCompraVenta option1={proveedores} accion={accion} option2={empleados} option3={productos} clienteProveedor="Proveedor"/>} accion={accion}
            fechingList={fechingListCompra} tipoLista={<CompraLista compras={compras.results} modalState={modalState}
            changeModalState={setModalState} setRowOfEdit={handleEdit} handleDelete={handleDelete}></CompraLista>}
            tableHead={tableHead}/>
            <EditContent modalState={modalState} changeModalState={setModalState} titleAdd="Editar"
            editCompras={<FormCompraVenta option1={proveedores} accion={accion} option2={empleados} option3={productos} clienteProveedor="Proveedor"/>}/>
        </>

     );
}
 
export default Compras;