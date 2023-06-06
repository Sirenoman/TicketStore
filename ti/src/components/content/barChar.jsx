import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export function BarChar() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales comparison with other events',
      },
    },
  };
  
  const labels = ['First Week', 'Second Week', 'Third Week', 'Quarter Week', 'Fifth Week', 'Sixth Week', 'Seventh Week'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Event 1',
        data: labels.map(() => Math.floor(Math.random() * (8000 - 1 + 1) + 1)),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Event 2',
        data: labels.map(() => Math.floor(Math.random() * (8000 - 1 + 1) + 1)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Event 3',
        data: labels.map(() => Math.floor(Math.random() * (8000 - 1 + 1) + 1)),
        backgroundColor: 'rgb(92, 137, 132)',
      },
      {
        label: 'Event 4',
        data: labels.map(() => Math.floor(Math.random() * (8000 - 1 + 1) + 1)),
        backgroundColor: 'rgb(229, 124, 35)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
