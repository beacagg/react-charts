import React from 'react'
import { Line } from 'react-chartjs-2'

function SimpleLineChart() {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: '2020',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
            },
            {
                label: '2019',
                data: [55, 49, 60, 71, 96, 100, 80],
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#2471A3',
                borderColor: '#2471A3',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#2471A3',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#2471A3',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
            },
        ]
    }

    const options = {
        title: {
            display: true, 
            text: 'Simple Line Chart'
        },
    }
    const legendOpts = {
        display: true,
        position: 'top',
        fullWidth: true,
        reverse: false,
        labels: {
          fontColor: '#212F3C'
        }
      };
    return (
        <Line data={data} options={options} width={500} height={200} legend={legendOpts}/>
    )
}

export default SimpleLineChart
