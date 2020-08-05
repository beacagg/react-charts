import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

function HorizontalBarChart() {

    const data = {
        labels: ['Jan', 'Fev', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#2E4053',
                borderColor: '#2E4053',
                borderWidth: 1,
                hoverBackgroundColor: '#283747',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
        ]
    }

    const options = {
        responsive: true,
        title: {
            display: true, 
            text: 'Horizontal Chart'
        },
        scales: {
            xAxes: [
                {
                   ticks: {
                       min: 0,
                       max: 100,
                       stepSize: 10
                   } 
                }
            ]
        }
    }
    return (
        <HorizontalBar data={data} options={options}/>
    )
}

export default HorizontalBarChart
