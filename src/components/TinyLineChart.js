import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'a', value: 3,
  },
  {
    name: 'b', value: 1,
  },
  {
    name: 'c', value: 7,
  },
  {
    name: 'd', value: 2,
  },
  {
    name: 'e', value: 5,
  },
];

 const TinyLineChart = () =>  {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/exh283uh/';
    return (
      <LineChart width={200} height={100} data={data}>
        <Line type="monotone" dataKey="value" stroke="#fff" strokeWidth={2} dot={false}/>
      </LineChart>
    );

}
export default TinyLineChart