import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const EarningsChart = () => {
    const data = {
        labels: ['Income', 'Taxes', 'Fees'],
        datasets: [
            {
                data: [32, 28, 40], // Percentage values
                backgroundColor: ['#818CF8', '#E0E7FF', '#6366F1'], // Tailwind colors for the chart segments
                hoverBackgroundColor: ['#3739b8', '#C7D2FE', '#4F46E5'], // Colors on hover
                borderWidth: 2,
                cutout: '70%', // For creating the hollow center effect
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    },
                },
            },
        },
    };

    return (
        <div className="  overflow-auto  scroll-smooth p-5">
            <h2 className="text-lg font-semibold mb-4">Earnings</h2>
            <div className="flex  gap-y-5 items-center lg:mt-20  pb-10">
                {/* Legend */}
                <div className="mr-6">
                    <div className="flex items-center mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"></span>
                        <span className="text-sm font-medium">Income</span>
                        <span className="ml-2 text-gray-500 text-sm">32%</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-200 mr-2"></span>
                        <span className="text-sm font-medium">Taxes</span>
                        <span className="ml-2 text-gray-500 text-sm">28%</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 mr-2"></span>
                        <span className="text-sm font-medium">Fees</span>
                        <span className="ml-2 text-gray-500 text-sm">40%</span>
                    </div>
                </div>

                {/* Chart */}
                <div className="relative">
                    <Doughnut data={data} options={options} className="h-40 w-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-semibold">$56,033</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EarningsChart;
