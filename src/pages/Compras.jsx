import React,{useState,useEffect} from 'react';
import Main from '../components/Main/Main';
import fetchMatdid from '../helpers/fetch';
import TableOchoCol from '../components/tables/TableOchoCol';
import CompraLista from '../components/compra/Compralista';





const Compras = () => {
    
    const [compras,setCompras] = useState({results:[],count:0})


                                           
    const [currentPage, setcurrentPage] = useState(1)

    async function fechingListCompra(offset){
        const  response  = await fetchMatdid(`/compras/compras/?offset=${offset}`)
        const body = await response.json();
        setCompras(body)
    }

    useEffect(() =>{
        fechingListCompra();
    },[])

    const tableHead = {primeraColumna:'#',segundaColumna:'fecha',terceraColumna:'proveedor',
    cuartaColumna:'ciudad',quintaColumna:'Encargado',sextaColumna:'Acción',septimaColumna:'Total',boton1:'',boton2:''}

   

    const numpage=Math.ceil(compras.count/6)
    

    const handlePagination = (page) =>{
        let offset = page===1 ? 0:(page-1)*6
        fechingListCompra(offset);
        setcurrentPage(page);

        
    }
    
    return ( 
        <Main title="Compras" url="/addcompra" handlePagination={handlePagination}  
        numpage={numpage} currentPage={currentPage} contenido={<TableOchoCol tableHead={tableHead}
            tipo={<CompraLista compras ={compras.results}/>}/>}></Main>
     );
}
 
export default Compras;