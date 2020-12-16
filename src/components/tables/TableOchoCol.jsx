import React from 'react'

function TableOchoCol() {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>            
                    <tr>
                    <th scope="col" className="text-center">#</th>
                    <th scope="col" className="text-center">Fecha</th>
                    <th scope="col" className="text-center">Proveedor</th>
                    <th scope="col" className="text-center">Ciudad</th>
                    <th scope="col" className="text-center">Encargado/a</th>
                    <th scope="col" className="text-center">Cantidad</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                                     
                    </tr>
                </thead>
                <tbody>
                    <tr >
                    <th scope="row" className="align-middle text-center">1</th>
                    <td className="align-middle text-center">12/13/20</td>
                    <td className="align-middle text-center">Book Seller</td>
                    <td className="align-middle text-center"> Caacupe</td>
                    <td className="align-middle text-center">Aldo Corvalan</td>
                    <td className="align-middle text-center">15000000</td>
                    <td><button className="btn btn-warning">Editar</button></td>
                    <td><button className="btn btn-danger">borrar</button></td>
                    </tr>
                    
                    
                </tbody>
            </table>
        </div>
    )
}

export default TableOchoCol
