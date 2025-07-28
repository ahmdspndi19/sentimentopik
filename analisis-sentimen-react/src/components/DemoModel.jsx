import React, { useState } from "react";

const DemoModel = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    if (!inputText) {
      alert("Masukkan teks ulasan terlebih dahulu!");
      return;
    }
    // Mock analysis results
    const sentiments = ["Positif", "Netral", "Negatif"];
    const topics = ["Kualitas", "Harga", "Pengiriman", "Desain", "Layanan"];
    const randomSentiment =
      sentiments[Math.floor(Math.random() * sentiments.length)];
    const randomScore = (Math.random() * 1).toFixed(2);
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];

    setResult({
      sentiment: randomSentiment,
      score: randomScore,
      topic: randomTopic,
    });
  };

  const getSentimentColor = (sentiment) => {
    if (sentiment === "Positif") return "text-green-600";
    if (sentiment === "Netral") return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Demo Model</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-medium text-gray-700 mb-4">
          Coba Model Kami
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan teks ulasan disini..."
              rows="4"
            ></textarea>
            <button
              onClick={handleAnalyze}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Analisis Sentimen
            </button>
          </div>
          <div className="flex-1 bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium text-gray-700 mb-2">Hasil Analisis:</h4>
            <div className="p-4 text-gray-800">
              {result ? (
                <>
                  <p>
                    Sentimen:{" "}
                    <span
                      className={`font-medium ${getSentimentColor(
                        result.sentiment
                      )}`}
                    >
                      {result.sentiment}
                    </span>
                  </p>
                  <p>
                    Skor: <span className="font-medium">{result.score}</span>
                  </p>
                  <p>
                    Topik: <span className="font-medium">{result.topic}</span>
                  </p>
                </>
              ) : (
                <p>Hasil akan muncul di sini...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoModel;
