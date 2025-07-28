import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ["Jul", "Aug", "Sep", "Oct"],
  datasets: [
    {
      label: "Positif",
      data: [58, 62, 60, 65.6],
      borderColor: "rgba(16, 185, 129, 1)",
      backgroundColor: "rgba(16, 185, 129, 0.1)",
      tension: 0.3,
      fill: true,
    },
    {
      label: "Netral",
      data: [30, 25, 22, 24.9],
      borderColor: "rgba(245, 158, 11, 1)",
      backgroundColor: "rgba(245, 158, 11, 0.1)",
      tension: 0.3,
      fill: true,
    },
    {
      label: "Negatif",
      data: [12, 13, 18, 9.5],
      borderColor: "rgba(239, 68, 68, 1)",
      backgroundColor: "rgba(239, 68, 68, 0.1)",
      tension: 0.3,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: { beginAtZero: false, title: { display: true, text: "Persentase (%)" } },
    x: { title: { display: true, text: "Bulan" } },
  },
};

const SentimentTrendChart = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-medium text-gray-700 mb-4">
      Trend Sentimen Bulanan
    </h3>
    <Line data={data} options={options} />
  </div>
);

export default SentimentTrendChart;
