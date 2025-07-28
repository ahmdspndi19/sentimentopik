// src/pages/TopicAnalysisPage.jsx
import React from "react";

import WordCloud from "../components/WordCloud";
import TopicBarChart from "../components/TopicBarChart";

const TopicAnalysisPage = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Analisis Topik Ulasan
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <WordCloud />
        <TopicBarChart />
      </div>
    </section>
  );
};

export default TopicAnalysisPage;
