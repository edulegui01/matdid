import React,{useState,useEffect} from 'react';
import Main from '../components/Main/Main';
import ProductosLista from '../components/producto/ProductoLista';
import customFetcher from '../helpers/fetch';
import TableOchoCol from '../components/tables/TableOchoCol';
import { confirmDeleteNotification,notification } from '../helpers/alert';
import BaseCompraVenta from '../components/baseCompraVenta/BaseCompraVenta';
import ProductoForm from '../components/producto/ProductoForm';
import EditContent from '../components/editForms/EditContent';



const Productos = () => {
   
    const [productos,setProductos] = useState({results:[],count:0})
    const [currentPage,setcurrentPage] = useState(1)
    const [modalState, setModalState] = useState(false)
    const [rowOfEdit,setRowOfEdit] = useState(null)

    async function fechingListProductos(offset){
        const  {response,data}  = await customFetcher(`/productos/productos/?offset=${offset}`)
        //const body = await response.json();
        setProductos(data)
    }

    async function fechingRowToEdit(producto){
        const {responseproducto,data} = await customFetcher(`/productos/productos_edit/${producto.id}`)
        //const bodyproducto = await responseproducto.json()
        //console.log(bodyproducto)
        setRowOfEdit(data)


        


    }

    useEffect(() =>{
        fechingListProductos();
    },[])


    async function fechingDeleteProducto(idProductoToDelete){
        const {response,data} = await customFetcher(`/productos/productos/${idProductoToDelete}`,null,'DELETE')
        //const body = await response.json()
        //console.log(body)
        notification('Eliminada',data.mensaje,'success')

    }


    const tableHead = {primeraColumna:'#',segundaColumna:'Fecha',terceraColumna:'Nombre',
    cuartaColumna:'Autor',quintaColumna:'Costo',sextaColumna:'Precio',septimaColumna:'Stock',boton1:'',boton2:''}

    const numpage=Math.ceil(productos.count/6)

    const handlePagination = (page) =>{
        let offset = page===1 ? 0:(page-1)*6
        fechingListProductos(offset);
        setcurrentPage(page);

        
    }

    const deleteProductoRow = (productoToDelete) => {
        console.log(productos.results[productoToDelete].id)
        let idProductoToDelete = productos.results[productoToDelete].id
        productos.results.splice(productoToDelete,1)
        setProductos({...productos,results:productos.results})
        fechingDeleteProducto(idProductoToDelete)
    }

    const handleDelete = (productoToDelete) =>{
        
        confirmDeleteNotification(() => deleteProductoRow(productoToDelete))

        
        
    }

    const handleEdit = (producto) => {
        setModalState(!modalState)
        fechingRowToEdit(producto)

        
        
    }
   
    /*<EditContent modalState={modalState} changeModalState={setModalState} titleAdd="Editar"
    editCompras={<ProductoForm  
    clienteProveedor="Proveedor" rowOfEdit={rowOfEdit} detalleToEdit={detalleToEdit} idCompra={idCompra}
    flag={true}/>}/>*/
    
    return ( 
        <>
        <BaseCompraVenta title="Productos" titleAdd="Agregar Producto" maximun_with={"10px"}
        count={productos.count} contenido={<ProductoForm maximun_with={'800px'}/>}
        fechingList={fechingListProductos} tipoLista={<ProductosLista productos={productos.results} modalState={modalState}
        changeModalState={setModalState} handleEdit={handleEdit} handleDelete={handleDelete}></ProductosLista>}
        tableHead={tableHead}/>
        <EditContent modalState={modalState} changeModalState={setModalState} titleAdd="Editar"
        editForm={<ProductoForm rowOfEdit={rowOfEdit}/>}/>
        
        </>
     );
}
 
export default Productos;