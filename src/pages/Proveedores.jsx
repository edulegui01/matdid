import React,{useState,useEffect} from 'react';
import Main from '../components/Main/Main';
import ProductosLista from '../components/producto/ProductoLista';
import customFetcher from '../helpers/fetch';
import TableOchoCol from '../components/tables/TableOchoCol';
import { confirmDeleteNotification,notification } from '../helpers/alert';
import BaseCompraVenta from '../components/baseCompraVenta/BaseCompraVenta';
import ProductoForm from '../components/producto/ProductoForm';
import EditContent from '../components/editForms/EditContent';
import ProveedoresLista from '../components/proveedores/ProveedoresLista';
import ProveedoresForm from '../components/proveedores/ProveedoresForm'

const Proveedores = () => {
    
    const [proveedores,setProveedores] = useState({results:[],count:0})
    const [currentPage,setcurrentPage] = useState(1)
    const [modalState, setModalState] = useState(false)
    const [rowOfEdit,setRowOfEdit] = useState(null)

    async function fechingListProveedores(offset){
        const  {response,data}  = await customFetcher(`/proveedores/proveedores/?offset=${offset}`)
        //const body = await response.json();
        setProveedores(data)
    }

    async function fechingRowToEdit(proveedor){
        const {responseproveedor,data} = await customFetcher(`/proveedores/proveedores_edit/${proveedor.id}`)
        //const bodyproveedor = await responseproveedor.json()
        //console.log(bodyproveedor)
        setRowOfEdit(data)


        


    }

    useEffect(() =>{
        fechingListProveedores();
    },[])


    async function fechingDeleteProveedor(idProveedorToDelete){
        const {response,data} = await customFetcher(`/proveedores/proveedores/${idProveedorToDelete}`,null,'DELETE')
        //const body = await response.json()
        //console.log(body)
        notification('Eliminada',data.mensaje,'success')

    }


    const tableHead = {primeraColumna:'#',segundaColumna:'Nombre',terceraColumna:'Ruc o Cédula',
    cuartaColumna:'Razón Social',quintaColumna:'Localidad',sextaColumna:'Total Cobrado',septimaColumna:'Deuda por Cobrar',boton1:'',boton2:''}

    const numpage=Math.ceil(proveedores.count/6)

    const handlePagination = (page) =>{
        let offset = page===1 ? 0:(page-1)*6
        fechingListProveedores(offset);
        setcurrentPage(page);

        
    }

    const deleteProveedorRow = (proveedorToDelete) => {
        console.log(proveedores.results[proveedorToDelete].id)
        let idproveedorToDelete = proveedores.results[proveedorToDelete].id
        proveedores.results.splice(proveedorToDelete,1)
        setProveedores({...proveedores,results:proveedores.results})
        fechingDeleteProveedor(idproveedorToDelete)
    }

    const handleDelete = (empleadoToDelete) =>{
        
        confirmDeleteNotification(() => deleteProveedorRow(empleadoToDelete))

        
        
    }

    const handleEdit = (proveedor) => {
        setModalState(!modalState)
        fechingRowToEdit(proveedor)

        
        
    }
   
   
    
    return ( 
        <>
        <BaseCompraVenta title="Proveedores" titleAdd="Agregar Proveedor" maximun_with={"10px"}
        count={proveedores.count} contenido={<ProveedoresForm maximun_with={'800px'}/>}
        fechingList={fechingListProveedores} tipoLista={<ProveedoresLista proveedores={proveedores.results} modalState={modalState}
        changeModalState={setModalState} handleEdit={handleEdit} handleDelete={handleDelete}></ProveedoresLista>}
        tableHead={tableHead}/>
        <EditContent modalState={modalState} changeModalState={setModalState} titleAdd="Editar"
        editForm={<ProveedoresForm rowOfEdit={rowOfEdit}/>}/>
        
        </>
     );
}

 
export default Proveedores;