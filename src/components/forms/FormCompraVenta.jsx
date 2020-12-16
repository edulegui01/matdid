import React from 'react'


const FormCompraVenta = () => {
    return ( 
        <form>
            <div className="form-row">
                <div className="form-group col-md-2">
                    <label>Fecha</label>
                    <input type="text" className="form-control" placeholder="Fecha"/>
                </div>
                <div className="form-group col-md-2">
                    <label>Acción</label>
                    <select className="form-control">
                        <option value="" selected>Compra</option>
                        <option value="" >...</option>
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label>Cliente</label>
                    <select className="form-control">
                        <option value="" ></option>
                        <option value="" >...</option>
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label>Empleado</label>
                    <select className="form-control">
                        <option value="" ></option>
                        <option value="" >...</option>
                    </select>
                </div>
            </div>
            <h7>Productos</h7>
            <div className="form-row">
                <div className="form-group col-md-2">
                    <label htmlFor="">Producto</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="">Cantidad</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="">Precio</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="">Descuento</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="">Sub total</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="">fasfd</label>
                    <button className="form-control">x</button>
                </div>
            </div>
        </form>
    );
}
 
export default FormCompraVenta;