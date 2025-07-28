import React, { useState } from "react";

const wordCloudData = {
  all: [
    { word: "kualitas", size: 28, color: "#3b82f6" },
    { word: "harga", size: 24, color: "#10b981" },
    { word: "pengiriman", size: 22, color: "#f59e0b" },
    { word: "desain", size: 20, color: "#6366f1" },
    { word: "kemasan", size: 18, color: "#ec4899" },
    { word: "layanan", size: 16, color: "#14b8a6" },
    { word: "warna", size: 14, color: "#f97316" },
  ],
  kualitas: [
    { word: "produk", size: 26, color: "#3b82f6" },
    { word: "material", size: 22, color: "#3b82f6" },
    { word: "awet", size: 20, color: "#3b82f6" },
    { word: "kokoh", size: 18, color: "#3b82f6" },
  ],
  harga: [
    { word: "murah", size: 24, color: "#10b981" },
    { word: "terjangkau", size: 22, color: "#10b981" },
  ],
  pengiriman: [
    { word: "cepat", size: 24, color: "#f59e0b" },
    { word: "lambat", size: 20, color: "#f59e0b" },
    { word: "aman", size: 22, color: "#f59e0b" },
  ],
  desain: [
    { word: "menarik", size: 24, color: "#6366f1" },
    { word: "keren", size: 22, color: "#6366f1" },
  ],
  layanan: [
    { word: "ramah", size: 24, color: "#14b8a6" },
    { word: "responsif", size: 22, color: "#14b8a6" },
  ],
  kemasan: [
    { word: "rapi", size: 24, color: "#ec4899" },
    { word: "aman", size: 22, color: "#ec4899" },
  ],
};

const topics = [
  "all",
  "kualitas",
  "harga",
  "pengiriman",
  "desain",
  "layanan",
  "kemasan",
];

const WordCloud = () => {
  const [selectedTopic, setSelectedTopic] = useState("all");
  const wordsToDisplay = wordCloudData[selectedTopic] || wordCloudData["all"];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-700">Word Cloud</h3>
        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {topics.map((topic) => (
            <option key={topic} value={topic} className="capitalize">
              {topic === "all" ? "Semua Topik" : topic}
            </option>
          ))}
        </select>
      </div>
      <div className="word-cloud min-h-[150px]">
        {wordsToDisplay.map((item) => (
          <span
            key={item.word}
            style={{
              fontSize: `${item.size}px`,
              color: item.color,
              fontWeight: "bold",
            }}
          >
            {item.word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordCloud;
