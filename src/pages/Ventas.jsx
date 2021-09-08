import React, {useState,useEffect} from 'react';
import Main from '../components/Main/Main';
import fetchMatdid from '../helpers/fetch';
import TableOchoCol from '../components/tables/TableOchoCol';
import VentaLista from '../components/venta/VentaLista';



const Ventas = () => {
    
    const [ventas, setVentas] = useState({results:[],count:0})

    const [currentPage, setcurrentPage] = useState(1)

    const tableHead = {primeraColumna:'#',segundaColumna:'fecha',terceraColumna:'Nombre',
    cuartaColumna:'Sector',quintaColumna:'Ciudad',sextaColumna:'Encargado',
    septimaColumna:'Tipo',octavaColumna:'Total',boton1:'',boton2:''}

    async function fechingListVenta(offset){
        const  response  = await fetchMatdid(`/ventas/ventas/?offset=${offset}`)
        const body = await response.json();
        setVentas(body)
    }
    useEffect(() =>{
        fechingListVenta();
    },[])

    const numpage=Math.ceil(ventas.count/6)

    const handlePagination = (page) =>{
        let offset = page===1 ? 0:(page-1)*6
        fechingListVenta(offset);
        setcurrentPage(page);

        
    }

    
    return ( 
        <Main title="Ventas" handlePagination={handlePagination} numpage={numpage} currentPage={currentPage}
        contenido={<TableOchoCol tableHead={tableHead} tipo={<VentaLista ventas ={ventas.results}/>}/>}></Main>
     );
}

export default Ventas;