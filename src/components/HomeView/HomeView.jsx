import React,{useEffect, useState} from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Content from '../content/Content';
import Main from '../Main/Main';
import customFetcher from '../../helpers/fetch';
import LineChart from './LineChart';



const HomeView = (props) => {
    
    const [datosGrafico,setDatosGrafico] = useState([])
    
    let ejeX=''
    let ejeY=''


    const config = {
        method: 'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }


    async function fechingGraficoData(){
        const  {response,data}  = await customFetcher(`/ventas/venta_grafica/`,config)
        //const body = await response.json();
        setDatosGrafico(data)
    }

    useEffect(() => {
        fechingGraficoData()
    },[])


    useEffect(() => {
    },[datosGrafico])

    const meses = {
        1:'Enero',
        2:'Febrero',
        3:'Marzo',
        4:'Abril',
        5:'Mayo',
        6:'Junio',
        7:'Julio',
        8:'Agosto',
        9:'Setiembre',
        10:'Octubre',
        11:'Noviembre',
        12:'Diciembre'
    }

    try{
         ejeY = datosGrafico.map(data => data.total_vendido)
         ejeX = datosGrafico.map(data => meses[data.month])

    }catch(error){

    }
    

    return ( 
      <Main isHome={true}>
          <LineChart ejeY={ejeY} ejeX={ejeX}></LineChart>
      </Main>
    )
}
 

export default HomeView;