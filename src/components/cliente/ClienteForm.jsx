import React,{useState,useEffect} from 'react';
import customFetcher from '../../helpers/fetch';
import {notification} from '../../helpers/alert';





const ClienteForm = ({rowOfEdit}) => {
    
    const [datosClientes,setDatosClientes] = useState({nombre:'',apellido:'',cedula:'',telefono:'',domicilio:'',localidad:'',email:'',rol:''})

   useEffect(() => {
    if(rowOfEdit){
        setDatosClientes(rowOfEdit)
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
        setDatosClientes({
            ...datosClientes,
            [name]:value
        })
    }

    const handleOnConfirm = () =>{
        fechclientesPost();
        
    }
    
    async function fechclientesPost(){
        let response = ''

        if(rowOfEdit){
            response = await customFetcher(`/clientes/clientes/${datosClientes.id}/`,datosClientes,'PUT')
        }else{
            response = await customFetcher('/clientes/clientes/',datosClientes,'POST')

        }

        //const body = await response.json();
        //console.log(response)

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
                <label>Nombre</label>
                <input type="text" name='nombre' value={datosClientes.nombre} onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Introduzca el nombre del producto...'/>
            </div>
            <div className="">
                <label>Apellido</label>
                <input type="text" name='apellido' value={datosClientes.apellido} onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Introduzca el nombre del producto...'/>
            </div>
            <div className="">
                <label>Cédula</label>
                <input type="number" name='cedula'  value={datosClientes.cedula} onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Introduzca el nombre del autor...'/>
            </div>
            <div className="">
                <label>Telefono</label>
                <input type="text" name='telefono' value={datosClientes.telefono}  onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Costo Producto...'/>
            </div>
            <div className="">
                <label>Fecha de Nacimineto</label>
                <input type="date" name='fecha_nacimi' value={datosClientes.fecha_nacimi}  onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Costo Producto...'/>
            </div>
            <div className="">
                <label>Domicilio</label>
                <input type="text" name='domicilio' value={datosClientes.domicilio}  onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Costo Producto...'/>
            </div>
            <div className="">
                <label>Localidad</label>
                <input type="text" name='localidad' value={datosClientes.localidad}  onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Precio Producto...'/>
            </div>
            <div className="">
                <label>Email</label>
                <input type="text" name='email' value={datosClientes.email}  onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Stock actual...'/>
            </div>
            <div className="">
                <label>Rol</label>
                <input type="text" name='rol' value={datosClientes.rol}  onChange={e => handleOnChange(e.target.name,e.target.value)} className="" placeholder='Stock mínimo...'/>
            </div>
            
            
           
            
        </form>
        <button className="btn btn-primary ml-2 mb-2" onClick={handleOnConfirm}>Confirmar</button>
        
        </>
      );
}
 
export default ClienteForm;