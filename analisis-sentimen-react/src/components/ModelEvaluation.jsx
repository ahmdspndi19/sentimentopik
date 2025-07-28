import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
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
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Data & Options for Top2Vec Chart
const top2vecData = {
  labels: ["Kualitas", "Harga", "Pengiriman", "Layanan"],
  datasets: [
    {
      label: "Koherensi Topik",
      data: [0.81, 0.78, 0.75, 0.68],
      backgroundColor: "rgba(79, 70, 229, 0.7)",
    },
  ],
};
const top2vecOptions = {
  responsive: true,
  scales: {
    y: { beginAtZero: true, max: 1, title: { display: true, text: "Score" } },
  },
  plugins: { legend: { display: false } },
};

// Data & Options for LSTM Chart
const lstmData = {
  labels: ["Epoch 1", "Epoch 5", "Epoch 10", "Epoch 15", "Epoch 20"],
  datasets: [
    {
      label: "Akurasi",
      data: [0.72, 0.82, 0.86, 0.88, 0.89],
      borderColor: "rgba(16, 185, 129, 1)",
      backgroundColor: "rgba(16, 185, 129, 0.1)",
      tension: 0.3,
      fill: true,
    },
    {
      label: "Loss",
      data: [0.68, 0.42, 0.31, 0.25, 0.22],
      borderColor: "rgba(239, 68, 68, 1)",
      backgroundColor: "rgba(239, 68, 68, 0.1)",
      tension: 0.3,
      fill: true,
    },
  ],
};
const lstmOptions = {
  responsive: true,
  scales: { y: { beginAtZero: true, title: { display: true, text: "Score" } } },
};

const ModelEvaluation = () => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Evaluasi Model
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top2Vec Evaluation */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Top2Vec Evaluasi
          </h3>
          <Bar data={top2vecData} options={top2vecOptions} />
          <div className="mt-4 text-sm text-gray-600">
            <p className="font-medium">Hasil Evaluasi:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Coherence Score: 0.78</li>
              <li>Topic Diversity: 0.85</li>
              <li>Waktu Pemrosesan: 2.4 detik/ulasan</li>
            </ul>
          </div>
        </div>
        {/* LSTM Evaluation */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            LSTM Evaluasi
          </h3>
          <Line data={lstmData} options={lstmOptions} />
          <div className="mt-4 text-sm text-gray-600">
            <p className="font-medium">Hasil Evaluasi:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Akurasi: 89.2%</li>
              <li>F1-Score: 0.87</li>
              <li>Waktu Pelatihan: 45 menit</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelEvaluation;
