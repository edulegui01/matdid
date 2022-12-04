import React,{useState,useEffect} from 'react';
import Main from '../components/Main/Main';
import ProductosLista from '../components/producto/ProductoLista';
import customFetcher from '../helpers/fetch';
import TableOchoCol from '../components/tables/TableOchoCol';
import { confirmDeleteNotification,notification } from '../helpers/alert';
import BaseCompraVenta from '../components/baseCompraVenta/BaseCompraVenta';
import ProductoForm from '../components/producto/ProductoForm';
import EditContent from '../components/editForms/EditContent';
import EmpleadoLista from '../components/empleados/EmpleadoLista';
import EmpleadoForm from '../components/empleados/EmpleadoForm';


const Empleados = () => {
    
    const [empleados,setEmpleados] = useState({results:[],count:0})
    const [currentPage,setcurrentPage] = useState(1)
    const [modalState, setModalState] = useState(false)
    const [rowOfEdit,setRowOfEdit] = useState(null)

    async function fechingListEmpleados(offset){
        const  {response,data}  = await customFetcher(`/empleados/empleados/?offset=${offset}`)
        //console.log(response.data)
        
        //const body = await response.json();
        setEmpleados(data)
    }

    async function fechingRowToEdit(empleado){
        const {responseproducto,data} = await customFetcher(`/empleados/empleados_edit/${empleado.id}`)
        //const bodyproducto = await responseproducto.json()
        //console.log(bodyproducto)
        setRowOfEdit(data)


        


    }

    useEffect(() =>{
        fechingListEmpleados();
    },[])


    async function fechingDeleteEmpleado(idEmpleadoToDelete){
        const {response,data} = await customFetcher(`/empleados/empleados/${idEmpleadoToDelete}`,null,'DELETE')
        //const body = await response.json()
        //console.log(body)
        notification('Eliminada',data.mensaje,'success')

    }


    const tableHead = {primeraColumna:'#',segundaColumna:'Nombre',
    terceraColumna:'Cedula',cuartaColumna:'Telefono',quintaColumna:'Localidad',sextaColumna:'Rol',boton1:'',boton2:''}

    const numpage=Math.ceil(empleados.count/6)

    const handlePagination = (page) =>{
        let offset = page===1 ? 0:(page-1)*6
        fechingListEmpleados(offset);
        setcurrentPage(page);

        
    }

    const deleteEmpleadoRow = (empleadoToDelete) => {
        console.log(empleados.results[empleadoToDelete].id)
        let idemplEadoToDelete = empleados.results[empleadoToDelete].id
        empleados.results.splice(empleadoToDelete,1)
        setEmpleados({...empleados,results:empleados.results})
        fechingDeleteEmpleado(idemplEadoToDelete)
    }

    const handleDelete = (empleadoToDelete) =>{
        
        confirmDeleteNotification(() => deleteEmpleadoRow(empleadoToDelete))

        
        
    }

    const handleEdit = (producto) => {
        setModalState(!modalState)
        fechingRowToEdit(producto)

        
        
    }
   
   
    
    return ( 
        <>
        <BaseCompraVenta title="empleados" titleAdd="Agregar Empleado" maximun_with={"10px"}
        count={empleados.count} contenido={<EmpleadoForm maximun_with={'800px'}/>}
        fechingList={fechingListEmpleados} tipoLista={<EmpleadoLista empleados={empleados.results} modalState={modalState}
        changeModalState={setModalState} handleEdit={handleEdit} handleDelete={handleDelete}></EmpleadoLista>}
        tableHead={tableHead}/>
        <EditContent modalState={modalState} changeModalState={setModalState} titleAdd="Editar"
        editForm={<EmpleadoForm rowOfEdit={rowOfEdit}/>}/>
        
        </>
     );
}

 
export default Empleados;