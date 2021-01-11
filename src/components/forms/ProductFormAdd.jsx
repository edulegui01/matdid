import React,{Fragment} from 'react'



const ProductFormAdd = ({listaNuevoProducto,handleInputChange,clearProduct}) => {
    return ( 
        listaNuevoProducto.map((numberProduct,i) => 
        <Fragment key={i}>
            <div className="col-4 mb-1">
                <select className="form-control" value onChange={handleInputChange} name="producto1">
                    <option value="grapefruit">..</option>
                    <option value="lime">..</option>     
                </select>       
            </div>
            <div className="col-1 mb-1">
                <input type="text" name="cantidad1" className="form-control " onChange={handleInputChange}/>      
            </div>
            <div className="col-2 mb-1">
                <input type="text" name="precio1" className="form-control" onChange={handleInputChange}/>      
            </div>
            <div className="col-2 mb-1">
                <input type="text" name="descuento1" className="form-control" onChange={handleInputChange}/>      
            </div>
            <div className="col-2 mb-1">
                <input type="text" name="subtotal1" className="form-control" onChange={handleInputChange}/>      
            </div>
            <div className="col-1 mb-1">
                <button className="btn btn-danger" onClick={(e) => clearProduct(e,i)}>borrar</button>      
            </div>
        </Fragment>
        )
     );
}
 
export default ProductFormAdd;