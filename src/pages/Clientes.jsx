import React,{useState,useEffect} from 'react';
import Main from '../components/Main/Main';
import ProductosLista from '../components/producto/ProductoLista';
import customFetcher from '../helpers/fetch';
import TableOchoCol from '../components/tables/TableOchoCol';
import { confirmDeleteNotification,notification } from '../helpers/alert';
import BaseCompraVenta from '../components/baseCompraVenta/BaseCompraVenta';
import ProductoForm from '../components/producto/ProductoForm';
import EditContent from '../components/editForms/EditContent';
import ClienteForm from '../components/cliente/ClienteForm'
import ClienteLista from '../components/cliente/ClienteLista';

const Clientes = () => {
    
    const [clientes,setClientes] = useState({results:[],count:0})
    const [currentPage,setcurrentPage] = useState(1)
    const [modalState, setModalState] = useState(false)
    const [rowOfEdit,setRowOfEdit] = useState(null)

    async function fechingListClientes(offset){
        const  {response,data}  = await customFetcher(`/cobros/clientes/?offset=${offset}`)
        //const body = await response.json();
        setClientes(data)
    }

    async function fechingRowToEdit(clientes){
        const {responsecliente,data} = await customFetcher(`/clientes/clientes_edit/${clientes.id}`)
        //const bodycliente = await responsecliente.json()
        setRowOfEdit(data)


        


    }

    useEffect(() =>{
        fechingListClientes();
    },[])


    async function fechingDeleteCliente(idClienteToDelete){
        const {response,data} = await customFetcher(`/clientes/clientes/${idClienteToDelete}`,null,'DELETE')
        //const body = await response.json()
        //console.log(body)
        notification('Eliminada',data.mensaje,'success')

    }


    const tableHead = {primeraColumna:'#',segundaColumna:'Nombre',terceraColumna:'Ruc o Cédula',
    cuartaColumna:'Razón Social',quintaColumna:'Localidad',sextaColumna:'Total Cobrado',septimaColumna:'Deuda por Cobrar',boton1:'',boton2:''}

    const numpage=Math.ceil(clientes.count/6)

    const handlePagination = (page) =>{
        let offset = page===1 ? 0:(page-1)*6
        fechingListClientes(offset);
        setcurrentPage(page);

        
    }

    const deleteClienteRow = (clienteToDelete) => {
        console.log(clientes.results[clienteToDelete].id)
        let idclienteToDelete = clientes.results[clienteToDelete].id
        clientes.results.splice(clienteToDelete,1)
        setClientes({...clientes,results:clientes.results})
        fechingDeleteCliente(idclienteToDelete)
    }

    const handleDelete = (clienteToDelete) =>{
        
        confirmDeleteNotification(() => deleteClienteRow(clienteToDelete))

        
        
    }

    const handleEdit = (cliente) => {
        setModalState(!modalState)
        fechingRowToEdit(cliente)

        
        
    }
   
   
    
    return ( 
        <>
        <BaseCompraVenta title="Clientes" titleAdd="Agregar Cliente" maximun_with={"10px"}
        count={clientes.count} contenido={<ClienteForm maximun_with={'800px'}/>}
        fechingList={fechingListClientes} tipoLista={<ClienteLista clientes={clientes.results} modalState={modalState}
        changeModalState={setModalState} handleEdit={handleEdit} handleDelete={handleDelete}></ClienteLista>}
        tableHead={tableHead}/>
        <EditContent modalState={modalState} changeModalState={setModalState} titleAdd="Editar"
        editForm={<ClienteForm rowOfEdit={rowOfEdit}/>}/>
        
        </>
     );
}

 
export default Clientes;