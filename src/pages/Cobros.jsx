import React,{useEffect,useState} from 'react';
import Main from '../components/Main/Main';
import CobroLista from '../components/cobros/CobroLista';
import customFetcher from '../helpers/fetch';
import TableOchoCol from '../components/tables/TableOchoCol';
import Content from '../components/content/Content';
import PagosCobrosForm from '../components/forms/PagosCobrosForm';


const Cobros = () => {
    
    const [cobros,setCobros] = useState({results:[],count:0})


                                           
    const [currentPage, setcurrentPage] = useState(1)

    async function fechingListCobros(offset){
        const  {response,data}  = await customFetcher(`/cobros/cobros/?offset=${offset}`)
        //const body = await response.json();
        setCobros(data)
    }

    useEffect(() =>{
        fechingListCobros();
    },[])

    const tableHead = {primeraColumna:'#',segundaColumna:'Fecha',terceraColumna:'Cliente',
    cuartaColumna:'Sector',quintaColumna:'Ciudad',sextaColumna:'Encargado/a',septimaColumna:'Cantidad',boton1:'',boton2:''}

   

    const numpage=Math.ceil(cobros.count/6)
    

    const handlePagination = (page) =>{
        let offset = page===1 ? 0:(page-1)*6
        fechingListCobros(offset);
        setcurrentPage(page);

        
    }

    return ( 
        <Main title="Cobros" titleAdd="Agregar Cobro" handlePagination={handlePagination} numpage={numpage} 
        contenido={<PagosCobrosForm/>}currentPage={currentPage}>
            <TableOchoCol tableHead={tableHead}>
                <CobroLista cobros={cobros.results}></CobroLista>
            </TableOchoCol>
        </Main>
     );
}
 
export default Cobros;