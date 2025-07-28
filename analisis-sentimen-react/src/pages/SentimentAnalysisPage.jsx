// src/pages/SentimentAnalysisPage.jsx
import React from "react";

import SentimentPieChart from "../components/SentimentPieChart";
import SentimentTrendChart from "../components/SentimentTrendChart";
import TopicSentimentChart from "../components/TopicSentimentChart";

const SentimentAnalysisPage = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Analisis Sentimen Ulasan
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <SentimentPieChart />
        <TopicSentimentChart />
        <SentimentTrendChart />
      </div>
    </section>
  );
};

export default SentimentAnalysisPage;
