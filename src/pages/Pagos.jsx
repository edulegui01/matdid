import React, { useState,useEffect } from 'react';
import Main from '../components/Main/Main';
import TableOchoCol from '../components/tables/TableOchoCol';
import fetchMatdid from '../helpers/fetch';
import PagosLista from '../components/pagos/PagosLista';




const Pagos = () => {
   
    const [pagos, setPagos] = useState({results:[],count:0})
    const [currentPage, setcurrentPage] = useState(1)

    async function fechingListPagos(offset){
        const  response  = await fetchMatdid(`/proveedores/proveedores/?offset=${offset}`)
        const body = await response.json();
        setPagos(body)
    }

    useEffect(() =>{
        fechingListPagos();
    },[])

    const tableHead = {primeraColumna:'#',segundaColumna:'Fecha',terceraColumna:'Proveedor',
    cuartaColumna:'Ciudad',quintaColumna:'Encargado',sextaColumna:'Cantidad',boton1:'',boton2:''}

    const numpage=Math.ceil(pagos.count/6)

    const handlePagination = (page) =>{
        let offset = page===1 ? 0:(page-1)*6
        fechingListPagos(offset);
        setcurrentPage(page);

        
    }

    return ( 
        <Main title="Pagos" handlePagination={handlePagination}  
        numpage={numpage} currentPage={currentPage} contenido={<TableOchoCol tableHead={tableHead}
        tipo={<PagosLista pagos ={pagos.results}/>}/>}>
        </Main>
     );
}
 
export default Pagos;