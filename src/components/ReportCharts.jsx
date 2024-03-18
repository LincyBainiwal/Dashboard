import React , {useState} from 'react'
import Chart from 'react-apexcharts';
function ReportCharts() {
    const[data]=useState({
        series:[
            {
                name:'Sales',
                data:[31,40,28,51,42,82,56],
            },
            {
                name:'Revenue',
                data:[11,32,45,32,34,52,41],
            },
            {
                name:'Customers',
                data:[15,11,32,18,9,24,11],
            },
        ],
        options:{
            charts:{
                height:350,
                type:'area',
                toolbar:{
                    show:false,
                },
            },
            markers:{
                size:4,
            },
            colors:['#4154f1','#2eca6a','#ff771d'],
            fill:{
                type:'gradient',
                gradient:{
                    shadeIntensity:1,
                    opacityFrom:0.3,
                    opacityTo:0.4,
                    stops:[0,90,100],
                },
            },
            dataLables:{
                enabled:false,
            },
            stroke:{
                curve:'smooth',
                width:2,
            },
            xaxis:{
                type:'datetime',
                categories:[
                    '2024-02-21T00:00:00.000Z',
                    '2024-02-21T01:30:00.000Z',
                    '2024-02-21T02:30:00.000Z',
                    '2024-02-21T03:30:00.000Z',
                    '2024-02-21T04:30:00.000Z',
                    '2024-02-21T05:30:00.000Z',
                    '2024-02-21T06:30:00.000Z',
                ],
            },
            tooltip:{
                x:{
                    format:'dd/MM/yy HH:mm'
                },
            },
        },
    });
  return (
    <Chart 
    options={data.options}
    series={data.series}
    type={data.options.charts.type}
    height={data.options.charts.height}
    />);
}

export default ReportCharts
