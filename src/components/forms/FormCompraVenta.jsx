import React from 'react'
import { useState } from 'react';
import ProductFormAdd from './ProductFormAdd';
import update from 'immutability-helper';


const FormCompraVenta = () => {
    
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
    
    
    
    
    const [datos, setDatos] = useState({
        fecha:actualDate(),
        accion:'grapefruit',
        proveedor:'',
        empleado:'',
    })

    const [listaNuevoProducto,setListaNuevoProducto] = useState([0,1,2,3])
    const [keys,setKeys] = useState(4)
    
    const nuevoProducto = (e) => {
        e.preventDefault()
        setKeys(keys+1)

        setListaNuevoProducto([...listaNuevoProducto,keys])
        
        
        
        /* setDatos({...datos,}) */

    }

    const clearProduct = (e,numberProduct) => {
        e.preventDefault()  
        
        setListaNuevoProducto(update(listaNuevoProducto,{$splice:[[numberProduct,1]]}))
        console.log(listaNuevoProducto);
    }


    



    const handleInputChange = (e) =>{
        const value = e.target.value;
        const name = e.target.name;

        setDatos({
            ...datos,
            [name]:value
        });

    }



    
    
    return ( 
       <form className="form-row m-2">
           <div className="col-2 ">
               <label className="form-label ">Fecha</label>
               <input 
               type="text" 
               className="form-control text-center"
               value= {datos.fecha}
               readOnly="readonly"
               />
           </div>
           <div className="col-2">
                <label className="form-label">Acción</label>
                <select className="form-control" value={datos.accion} onChange={handleInputChange} name="accion">
                    <option value="grapefruit">Compra</option>
                    <option value="lime">Devolución</option>
                </select>       
            </div>
            <div className="col-4">
                <label className="form-label">Proveedor</label>
                <select className="form-control" value={datos.proveedor} onChange={handleInputChange} name="proveedor">
                    <option value="grapefruit">...</option>
                    <option value="lime">...</option>
                </select>       
            </div>
            <div className="col-4">
                <label className="form-label">Empleado</label>
                <select className="form-control" value={datos.empleado} onChange={handleInputChange} name="empleado">
                    <option value="grapefruit">..</option>
                    <option value="lime">..</option>
                </select>       
            </div>
            
            <h5 className="col-12">Productos</h5>
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
            <ProductFormAdd listaNuevoProducto={listaNuevoProducto} handleInputChange={handleInputChange} clearProduct={clearProduct}></ProductFormAdd>
            {/* {nuevaListaProducto(listaNuevoProducto,handleInputChange,clearProduct)} */}

           <input type="submit" value="nuevo producto" className="col-12 btn btn-link" onClick={nuevoProducto}/>
       </form>
    );
}
 
export default FormCompraVenta;