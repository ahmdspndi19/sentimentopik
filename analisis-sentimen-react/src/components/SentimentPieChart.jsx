import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Positif", "Netral", "Negatif"],
  datasets: [
    {
      data: [65.6, 24.9, 9.5],
      backgroundColor: [
        "rgba(16, 185, 129, 0.7)",
        "rgba(245, 158, 11, 0.7)",
        "rgba(239, 68, 68, 0.7)",
      ],
      borderColor: [
        "rgba(16, 185, 129, 1)",
        "rgba(245, 158, 11, 1)",
        "rgba(239, 68, 68, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "bottom" },
    tooltip: {
      callbacks: { label: (context) => `${context.label}: ${context.raw}%` },
    },
  },
};

const SentimentPieChart = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-medium text-gray-700 mb-4">
      Distribusi Sentimen
    </h3>
    <div className="max-h-80 mx-auto">
      <Pie data={data} options={options} />
    </div>
    <div className="mt-10 text-sm text-gray-500">
      <p>
        Visualisasi menunjukkan seberapa sering topik tertentu muncul dalam
        ulasan dengan sentimen berbeda.
      </p>
    </div>
  </div>
);

export default SentimentPieChart;
