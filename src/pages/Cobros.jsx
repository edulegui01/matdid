import React,{useEffect,useState} from 'react';
import Main from '../components/Main/Main';
import CobroLista from '../components/cobros/CobroLista';
import fetchMatdid from '../helpers/fetch';
import TableOchoCol from '../components/tables/TableOchoCol';


const Cobros = () => {
    
    const [cobros,setCobros] = useState({results:[],count:0})


                                           
    const [currentPage, setcurrentPage] = useState(1)

    async function fechingListCobros(offset){
        const  response  = await fetchMatdid(`/cobros/cobros/?offset=${offset}`)
        const body = await response.json();
        setCobros(body)
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
        <Main title="Cobros" handlePagination={handlePagination}  
        numpage={numpage} currentPage={currentPage} contenido={<TableOchoCol tableHead={tableHead}
            tipo={<CobroLista cobros ={cobros.results}/>}/>}></Main>
     );
}
 
export default Cobros;