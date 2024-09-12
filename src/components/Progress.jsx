import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProgressChat = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sale',
        data: [120, 150, 200, 180, 160, 210, 180, 200, 160, 220, 240, 260],
        borderColor: '#3b82f6', 
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 50,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Sale: ${tooltipItem.raw}K`,
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md ">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-lg font-semibold">Earning Statistics</h2>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-gray-200 text-sm rounded-lg">Export Report</button>
          <button className="px-4 py-2 bg-gray-200 text-sm rounded-lg">This Week</button>
        </div>
      </div>
      <div className="h-80">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ProgressChat;
