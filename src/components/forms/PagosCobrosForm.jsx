import React from 'react'


const PagosCobrosForm = () => {
    return (
        <>
        <form className="form-row m-2">
            <div className="form-group col-6">
                <label>Fecha</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group col-6">
                <label>Cliente</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group col-6">
                <label>Empleado</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group col-6">
                <label>Cuenta</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group col-6">
                <label>Forma de pago</label>
                <input type="text" className="form-control"/>
            </div>
            
            <div className="form-group col-6">
                <label>Cantidad</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group col-12">
                <label>Comentario</label>
                <textarea name="comentario"className="form-control" id="" cols="10" rows="5"></textarea>
            </div>
            
        </form>
        <button className="btn btn-primary ml-2 mb-2">Confirmar</button>
        </>
      );
}
 
export default PagosCobrosForm;