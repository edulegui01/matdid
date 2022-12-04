import React from 'react'
import { useState, useRef, useEffect} from 'react';
import ProductFormAdd from './ProductFormAdd';
import customFetcher from '../../helpers/fetch';
import { notification, notification1 } from '../../helpers/alert';


const FormCompraVenta = ({option1,option2,option3,clienteProveedor,accion,rowOfEdit=null,flag,detalleToEdit,idCompra}) => {
    useEffect(() =>{
        fechingListProductos();
        
    },[])

    console.log(detalleToEdit)

    const actualDate = () => {
        let fecha = new Date();

        let hoy = fecha.getDate().toString()
        
        let mes = (fecha.getMonth()+1).toString()

        let anho = fecha.getFullYear().toString()

       if (hoy.length <= 1){
           hoy = 0+hoy;
       }
       
       if (mes.length <=1){
           mes = 0+mes
       }

       let actualDate = hoy+"/"+mes+"/"+anho

        
       return actualDate
    }

    
    const [datosCompra, setDatosCompra] = useState({accion:accion.accion1,id_proveedor:"",id_empleado:'',monto_total:''})
    const [productos, setProductos] = useState([])
    
    useEffect(() =>{
        
        if (rowOfEdit !== null){
            setDatosCompra(rowOfEdit)
            setRowsProducts(detalleToEdit)

        }
        
    },[rowOfEdit,detalleToEdit])    
    

    const initialState = {id_producto:'',cantidad:'',precio:'',descuento:'',precio_calculado:''}
    
    
    const [rowsProducts, setRowsProducts] = useState([initialState,initialState,initialState,initialState])

    const costoProduct = {}
    productos.forEach(producto => costoProduct[producto.id]=producto.costo)

    const id_cliente_or_proveedor = accion.accion1==='compra' ?  'id_proveedor':'id_cliente'


    const divRefProveedores = useRef()
    const divRefEmpleados = useRef()
    const errorMessageProductos = useRef()

    




    async function fechingListProductos(){
        const  {response,data}  = await customFetcher(`/productos/productos_compra`)
        //const body = await response.json();
        setProductos(data)

    }
    
    const handleInputChange = (index,name,value) => {
        if(index!==undefined){
            let valueParse=''
            const copyRowsProducts = [...rowsProducts]
            if(name==='id_producto'){
                if(value!==""){
                    errorMessageProductos.current.className="col-12 d-none"
                    const precio=copyRowsProducts[index].cantidad=="" ? "":copyRowsProducts[index].cantidad*costoProduct[value]
                    console.log(precio)
                    const precio_calculado=precio=="" ? "":precio-(precio*copyRowsProducts[index].descuento)
                    copyRowsProducts[index] = {
                        ...copyRowsProducts[index],
                        precio:isNaN(precio) ? "":precio,
                        precio_calculado:precio_calculado
                        
                    }

                }
                else{
                    copyRowsProducts[index] = {
                        ...copyRowsProducts[index],
                        precio:"",
                        precio_calculado:""
                    }
                }

                

                
                
            }

            if(name=='cantidad'){
                errorMessageProductos.current.className="col-12 d-none"
                const precio=value=="" ? "":value*costoProduct[copyRowsProducts[index].id_producto]
                const precio_calculado=precio=="" ? "":precio-(precio*copyRowsProducts[index].descuento)
                copyRowsProducts[index]={
                    ...copyRowsProducts[index],
                    precio:isNaN(precio) ? "":precio,
                    precio_calculado:isNaN(precio_calculado) ? "":precio_calculado
                }

                
            }
            
            
            
            if(name==='descuento'){
                valueParse = parseInt(value)/100
                valueParse = isNaN(valueParse) ? "":valueParse
                copyRowsProducts[index]={
                    ...copyRowsProducts[index],
                    precio_calculado:valueParse!="" ? copyRowsProducts[index].precio-(valueParse*copyRowsProducts[index].precio):copyRowsProducts[index].precio
                }

            }else{
                valueParse = value=="" ? "":parseInt(value)
            }
            
            let sumaPrecioCompra=0
            copyRowsProducts.forEach(producto => {
                sumaPrecioCompra+=producto.precio_calculado=="" ?  0:producto.precio_calculado
            })
            
            
            copyRowsProducts[index] = {
                ...copyRowsProducts[index],
                [name]:valueParse
            }
            setDatosCompra({
                ...datosCompra,
                monto_total:sumaPrecioCompra
            })
            setRowsProducts(copyRowsProducts)
        }else{
            if(name==='accion'){
                setDatosCompra({
                    ...datosCompra,
                    [name]:value
                })
            }else{
                if(name==='id_proveedor'){
                    divRefProveedores.current.children.id_select_proveedor.className="form-control"
                    divRefProveedores.current.children.id_proveedor.className="text-danger pl-1 d-none"
                }

                if(name==='id_empleado'){
                    divRefEmpleados.current.children.id_select_empleados.className="form-control"
                    divRefEmpleados.current.children.id_empleados.className="text-danger pl-1 d-none"
                }
                setDatosCompra({
                ...datosCompra,
                [name]:isNaN(parseInt(value)) ? "":parseInt(value)
                })

            }
            
        }
    }


    const handleOnadd = (e) =>{
        e.preventDefault()
        setRowsProducts(rowsProducts.concat(initialState))
    }

    const handleOnRemove = (index,e) =>{
        e.preventDefault()
        const copyRowsProducts = [...rowsProducts]
        console.log(copyRowsProducts)
        console.log(datosCompra)
        setDatosCompra({
            ...datosCompra,
            monto_total:datosCompra.monto_total-copyRowsProducts[index].precio_calculado
        })
        copyRowsProducts.splice(index,1)
        setRowsProducts(copyRowsProducts)
    }

    const optionsList = (optionIterable,isEmple=false) => optionIterable.map(proveedor => {
        let proveOrEmple = datosCompra.id_proveedor

        if(isEmple){
            proveOrEmple = datosCompra.id_empleado
        }

        
        if(rowOfEdit){
            if(proveOrEmple === proveedor.id){
                return <option selected key={proveedor.id} value={proveedor.id}>{proveedor.nombre}</option>
            }else{
                return <option key={proveedor.id} value={proveedor.id}>{proveedor.nombre}</option>
            }
                    
        }else{
            return <option key={proveedor.id} value={proveedor.id}>{proveedor.nombre}</option>
            
        }
                


    })


    
       


    


    const handleOnConfirm = () =>{
        
        if(datosCompra.id_proveedor === ""){
            divRefProveedores.current.children.id_select_proveedor.className="form-control border border border-danger"
            divRefProveedores.current.children.id_proveedor.className="text-danger pl-1 d-block"
        }
        
        if(datosCompra.id_empleado === ""){
            divRefEmpleados.current.children.id_select_empleados.className="form-control border border border-danger"
            divRefEmpleados.current.children.id_empleados.className="text-danger pl-1 d-block"
        }
        
        let copyRowsProducts = [...rowsProducts]
       

        copyRowsProducts = copyRowsProducts.filter(producto => producto.id_producto!=="" || producto.cantidad!=="")
        //console.log(copyRowsProducts)
        
        copyRowsProducts.forEach(producto => {
            //console.log(producto)
            if (producto.id_producto==="" || producto.cantidad===""){
                errorMessageProductos.current.className="col-12 d-block"
                return true
            }
            
        })

        copyRowsProducts = copyRowsProducts.filter(prodcuto => prodcuto.id_producto!="")
        
        if (copyRowsProducts.length===0){
            errorMessageProductos.current.className="col-12 d-block"
        }

        let copyDatosCompra = datosCompra
        if (datosCompra.accion==="venta" || datosCompra.accion === "muestra"){
            copyDatosCompra={
                ...copyDatosCompra,
                id_cliente:datosCompra.id_proveedor
            }

            delete copyDatosCompra.id_proveedor


        }
        //console.log(copyRowsProducts)


        const dataToFech ={
            ...copyDatosCompra,
            detalles:copyRowsProducts
            
        }

        //console.log(dataToFech)
        fechingPostCompra(dataToFech)
        

       

        
    }

    async function fechingPostCompra(datosCompra){
        let response = ''
        
        

        if (datosCompra.accion === 'compra' || datosCompra.accion === 'devolucion'){
            
            if (rowOfEdit){
                response = await customFetcher(`/compras/update_compra/${idCompra}/`,datosCompra,'PUT')
                
            }
            else{
                response = await customFetcher(`/compras/compras/`,datosCompra,'POST')

            }

        }else if(datosCompra.accion === 'venta' || datosCompra.accion === 'muestra'){
            
                response = await customFetcher(`/ventas/ventas/`,{
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(datosCompra)
                })

                console.log(response.data)
                

           
        }
        
        
        console.log(response)

        if (response.response.status == 201 || response.response.status == 200 ){
            await notification('Exito',response.data.message,'success')
            if (response.data.message_alert){
                for (var i=0;i<response.data.message_alert.length;i++){
                    await notification('Atención',response.data.message_alert[i],'warning')
                }
            }
        }else{
            await notification('Error',response.data.message,'error')
        }

        
       
        
        
    }

    const optionAddOrEdit = () =>{
        /*if(rowOfEdit){
           return <option selected value={datosCompra.id_proveedor}>{compraToEdit.proveedor}</option>
        }else{
            return <option selected value="">Seleccione un Proveedor</option>
        }*/
    }



    
    
    return ( 
       <form className="form-row m-2">
           <div className={rowOfEdit!==null ? "col-2 d-none":"col-2"}>
               <label className="form-label ">Fecha</label>
               <input 
               type="text" 
               className="form-control text-center"
               value= {actualDate()}
               readOnly="readonly"
               />
           </div>
           <div className={rowOfEdit!==null ?"col-4":"col-2"}>
                <label className="form-label">Acción</label>
                <select placeholder="elige la accion" className="form-control " 
                value={datosCompra.accion}  onChange={e =>handleInputChange(undefined,e.target.name,e.target.value)} name="accion">
                    <option value={accion.accion1}>{accion.accion1}</option>
                    <option value={accion.accion2}>{accion.accion2}</option>
                </select>
                    
            </div>
            <div className="col-4" ref={divRefProveedores}>
                <label className="form-label">{clienteProveedor}</label>
                <select className="form-control" required   id="id_select_proveedor" onChange={e =>handleInputChange(undefined,e.target.name,e.target.value)} name="id_proveedor">
                    <option className={rowOfEdit ? "d-none":""} value="">Seleccione el {clienteProveedor}</option>
                    {optionsList(option1)}
                    
                </select>
                <small className="text-danger pl-1 d-none" id="id_proveedor">Seleccione un proveedor</small>          
            </div>
            <div className="col-4" ref={divRefEmpleados}>
                <label className="form-label">Empleado</label>
                <select className="form-control" value={datosCompra.empleado} id="id_select_empleados" onChange={e =>handleInputChange(undefined,e.target.name,e.target.value)} name="id_empleado">
                    <option className={rowOfEdit ? "d-none":""} value="">Seleccione el Empleado</option>
                    {optionsList(option2,true)}
                </select>  
                <small className="text-danger pl-1 d-none"  id="id_empleados">Seleccione un empleado</small>      
            </div>
            
            <h5 className="col-12">Productos</h5>
            <p className="col-12 d-none" ref={errorMessageProductos} style={{padding:'5px', margin:'0',fontSize:'14px',backgroundColor:'#FFBABA',color:'#D8000C'}}>Los campos producto y cantidad son necesarios</p>
            <div className="col-4">
                <label className="form-label">Producto</label>     
            </div>
            <div className="col-1">
                <label className="form-label">Cantidad</label>     
            </div>
            <div className="col-2">
                <label className="form-label">Precio</label>      
            </div>
            <div className="col-2">
                <label className="form-label">Descuento</label>     
            </div>
            <div className="col-2">
                <label className="form-label">Sub total</label>      
            </div>
                <ProductFormAdd handleInputChange={handleInputChange} rowsProducts = {rowsProducts} 
                handleOnRemove={handleOnRemove} productos={option3} ></ProductFormAdd>
            <span className="col-9"></span>
            <div className="col-2">
                <label className="form-label">Total</label>
                <input type="number" name="monto_total" readOnly="readonly" value={datosCompra.monto_total} className="form-control "/>      
            </div>

           <input type="submit" value="nuevo producto" className="col-12 btn btn-link" onClick={handleOnadd}/>
           <button type="button" className="btn btn-primary" onClick={handleOnConfirm}>Confirmar</button>
       </form>
    );
}
 
export default FormCompraVenta;