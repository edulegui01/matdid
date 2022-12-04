import React,{useState,useEffect} from 'react';
import customFetcher from '../../helpers/fetch';
import {notification} from '../../helpers/alert';
import  './producto_form_style.css'




const ProductoForm = ({rowOfEdit}) => {
    
    const [datosProductos,setDatosProductos] = useState({nombre:'',autor:'',costo:'',precio:'',stock_actual:'',stock_minimo:'',descripcion:''})

   useEffect(() => {
    if(rowOfEdit){
        setDatosProductos(rowOfEdit)
    }
        
   },[rowOfEdit])




    
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


    const handleOnChange = (name,value) =>{
        setDatosProductos({
            ...datosProductos,
            [name]:value
        })
    }

    const handleOnConfirm = () =>{
        fechProductosPost();
        
    }
    
    async function fechProductosPost(){
        let response = {}

        if(rowOfEdit){
            response = await customFetcher(`/productos/productos/${datosProductos.id}/`,datosProductos,'PUT')
        }else{
            response = await customFetcher('/productos/productos/',datosProductos,'POST')

        }

        //const body = await response.json();
        //console.log(body)

        notification('Éxito',response.data.message,'success')
    }
    
    return (
        <>
            <form className="producto_form">
            <div className="producto_items">
                <label className='' style={{width:'20%'}}>Fecha</label>
                <input value={actualDate()}type="text"  className="" style={{width:'80%'}}  readOnly='readonly'/>
            </div>
            <div className="">
                <label>Nombre del Producto</label>
                <input type="text" name='nombre' value={datosProductos.nombre} onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Introduzca el nombre del producto...'/>
            </div>
            <div className="">
                <label>Autor</label>
                <input type="text" name='autor'  value={datosProductos.autor} onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Introduzca el nombre del autor...'/>
            </div>
            <div className="">
                <label>Costo</label>
                <input type="number" name='costo' value={datosProductos.costo}  onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Costo Producto...'/>
            </div>
            <div className="">
                <label>Precio</label>
                <input type="number" name='precio' value={datosProductos.precio}  onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Precio Producto...'/>
            </div>
            <div className="">
                <label>Stock Actual</label>
                <input type="number" name='stock_actual' value={datosProductos.stock_actual}  onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Stock actual...'/>
            </div>
            <div className="">
                <label>Stock Mínimo</label>
                <input type="number" name='stock_minimo' value={datosProductos.stock_minimo}  onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Stock mínimo...'/>
            </div>
            
            <div className="">
                <label>Descripción</label>
                <textarea type="text" name='descripcion' value={datosProductos.descripcion}  onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Escriba una breve descripción...'/>
            </div>
           
            
        </form>
        <button className="btn btn-primary ml-2 mb-2" onClick={handleOnConfirm}>Confirmar</button>
        
        </>
      );
}
 
export default ProductoForm;