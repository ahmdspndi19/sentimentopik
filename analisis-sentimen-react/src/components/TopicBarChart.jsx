import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Kualitas", "Harga", "Pengiriman", "Desain", "Layanan", "Kemasan"],
  datasets: [
    {
      label: "Frekuensi Topik",
      data: [42, 28, 12, 8, 6, 4],
      backgroundColor: "rgba(59, 130, 246, 0.7)",
      borderColor: "rgba(59, 130, 246, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: { beginAtZero: true, title: { display: true, text: "Persentase (%)" } },
    x: { title: { display: true, text: "Topik" } },
  },
  plugins: { legend: { display: false } },
};

const TopicBarChart = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-medium text-gray-700 mb-4">Distribusi Topik</h3>
    <Bar data={data} options={options} />
  </div>
);

export default TopicBarChart;
