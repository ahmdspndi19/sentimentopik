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
  labels: ["Kualitas", "Harga", "Pengiriman", "Layanan", "Desain"],
  datasets: [
    {
      label: "Positif",
      data: [35, 25, 15, 10, 7],
      backgroundColor: "rgba(16, 185, 129, 0.7)",
    },
    {
      label: "Netral",
      data: [10, 5, 25, 3, 2],
      backgroundColor: "rgba(245, 158, 11, 0.7)",
    },
    {
      label: "Negatif",
      data: [8, 12, 20, 5, 3],
      backgroundColor: "rgba(239, 68, 68, 0.7)",
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: { stacked: true, title: { display: true, text: "Topik" } },
    y: { stacked: true, title: { display: true, text: "Jumlah Ulasan" } },
  },
};

const TopicSentimentChart = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-medium text-gray-700 mb-4">
      Distribusi Topik per Sentimen
    </h3>
    <Bar data={data} options={options} />
    <div className="mt-4 text-sm text-gray-500">
      <p>
        Visualisasi menunjukkan seberapa sering topik tertentu muncul dalam
        ulasan dengan sentimen berbeda.
      </p>
    </div>
  </div>
);

export default TopicSentimentChart;
