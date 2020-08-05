import React from 'react';
import './App.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import SimpleLineChart from './components/SimpleLineChart'
import HorizontalBarChart from './components/HorizontalBarChart'
import PieChart from './components/PieChart';
import TinyLineChart from './components/TinyLineChart'

function App() {
  return (
    <div className="App">
      {/* <div className='chart'>
        <LineChart />
        <SimpleLineChart />
        <BarChart />
        <DoughnutChart />
        <HorizontalBarChart />
        <PieChart />
      </div> */}

      <div className="card">
        Grupos
        <div className="bottom">
          <TinyLineChart />
        </div>
      </div>
    </div>
  );
}

export default App;
