import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from  "chart.js";

import {Line} from "react-chartjs-2";
import React from 'react'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


const LineChart = ({ejeX,ejeY}) => {
    const labels = ejeX

    const options = {
        fill:true
    }
    console.log(ejeX)

    const data = {
        datasets: [
            {
                label:"Ventas de Materiales didacticos por mes",
                data:ejeY,
                tension:0.3,
                borderColor:'rgb(0, 88, 255)',
                pointRadius:7,
                pointBackgroundColor:'rgb(0, 88, 255)',
                backgroundColor:'rgb(0, 88, 255,0.3)'
            }
        ],
        labels
    }
    
    return (
        <div style={{'margin':'70px','backgroundColor':'white'}}>
            <Line data={data} options={options}></Line>

        </div>
      );
}
 
export default LineChart;