import React from 'react'




function TableOchoCol(props) {
    ///<CompraLista compras={props.accion}/>


    

    
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>            
                    <tr>
                    <th scope="col">{props.tableHead.primeraColumna}</th>
                    <th scope="col">{props.tableHead.segundaColumna}</th>
                    <th scope="col">{props.tableHead.terceraColumna}</th>
                    <th scope="col">{props.tableHead.cuartaColumna}</th>
                    <th scope="col">{props.tableHead.quintaColumna}</th>
                    <th scope="col">{props.tableHead.sextaColumna}</th>
                    <th scope="col">{props.tableHead.septimaColumna}</th>
                    <th scope="col">{props.tableHead.octavaColumna}</th>
                    <th scope="col">{props.tableHead.boton2}</th>
                    <th scope="col">{props.tableHead.boton1}</th>
                    
                                     
                    </tr>
                    
                </thead>
                {props.tipo}
            
            </table>
        </div>
    )
}

export default TableOchoCol
