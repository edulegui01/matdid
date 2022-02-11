import React,{useState,useEffect} from 'react';
import Main from '../Main/Main';
import TableOchoCol from '../tables/TableOchoCol';
import FormCompraVenta from '../forms/FormCompraVenta';






const BaseCompraVenta = ({count,fechingList,tipoLista,option1,contenido,
    option2,option3,tableHead,title,titleAdd,clienteProveedor,accion}) => {
                                       
    const [currentPage, setcurrentPage] = useState(1)
    /*let contenido=<FormCompraVenta option1={option1} 
    accion={accion} option2={option2} option3={option3} clienteProveedor={clienteProveedor}/>
   */

    const numpage=Math.ceil(count/6)
    

    const handlePagination = (page) =>{
        let offset = page===1 ? 0:(page-1)*6
        fechingList(offset);
        setcurrentPage(page);

        
    }

   


    
    
    
    return ( 
        <Main title={title} titleAdd={titleAdd} handlePagination={handlePagination} numpage={numpage} 
        currentPage={currentPage} contenido={contenido} >
            <TableOchoCol tableHead={tableHead}>
                {tipoLista}
            </TableOchoCol>
        </Main>

     );
}
 
export default BaseCompraVenta;