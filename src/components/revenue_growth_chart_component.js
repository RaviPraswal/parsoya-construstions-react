import React from 'react';
import { Line } from 'react-chartjs-2';

const RevenueGrowthChart = () => {
  const data = {
    labels: ['2000', '2005', '2010', '2015', '2020'],
    datasets: [
      {
        label: 'Revenue Growth',
        data: [100, 200, 500, 800, 1500],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 1)',
        pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointHoverBorderColor: 'rgba(255, 255, 255, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 14,
            family: 'Roboto',
          },
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 14,
            family: 'Roboto',
          },
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Revenue Growth Rate Since 2000',
        font: {
          size: 20,
          family: 'Roboto',
        },
        padding: 20,
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default RevenueGrowthChart;
