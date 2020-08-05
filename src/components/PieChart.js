import React from 'react'
import { Pie } from 'react-chartjs-2'

function PieChart() {

    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow'
          ],
          datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#E74C3C',
            '#138D75',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#E74C3C',
            '#138D75',
            '#FFCE56'
            ]
          }]
    }

    const options = {
        title: {
            display: true, 
            text: 'Line Chart'
        }
    }
    return (
        <Pie data={data} options={options}/>
    )
}

export default PieChart
