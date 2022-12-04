import React,{Fragment} from 'react'



const ProductFormAdd = ({rowsProducts,handleInputChange,handleOnRemove,productos}) => {
    const productosList = productos.map(producto => <option key={producto.id} value={producto.id}>{producto.nombre}</option>)
    console.log(rowsProducts)
    return ( 
        rowsProducts.map((row,index) => 
        <Fragment key={index}>
            <div className="col-3 mb-1">
                <select className="form-control" value={row.id_producto} onChange={e => handleInputChange(index,e.target.name,e.target.value)} name="id_producto">
                   <option value="" className={rowsProducts[0].id_producto ==="" ? "":"d-none"}>Seleccione un producto</option>
                   {productosList}   
                </select>       
            </div>
            <div className="col-2 mb-1">
                <input type="number" name="cantidad" value={row.cantidad} className="form-control" onChange={e => handleInputChange(index,e.target.name,e.target.value)}/>      
                
            </div>
            <div className="col-2 mb-1">
                <input type="text" name="precio" value={row.precio} readOnly="readonly" className="form-control" onChange={e => handleInputChange(index,e.target.name,e.target.value)}/>      
            </div>
            <div className="col-2 mb-1">
                <input type="text" name="descuento" value={row.descuento!="" ? Math.round(row.descuento*100):""} className="form-control" onChange={e => handleInputChange(index,e.target.name,e.target.value)}/>      
            </div>
            <div className="col-2 mb-1">
                <input type="text" name="precio_calculado" value={row.precio_calculado} readOnly="readonly" className="form-control" onChange={e => handleInputChange(index,e.target.name,e.target.value)}/>      
            </div>
            <div className="col-1 mb-1">
                <button className="btn btn-danger" onClick={e =>handleOnRemove(index,e)}>borrar</button>      
            </div>
        </Fragment>
        )
     );
}
 
export default ProductFormAdd;