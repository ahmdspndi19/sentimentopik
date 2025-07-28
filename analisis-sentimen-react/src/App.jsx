// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import TopicAnalysisPage from "./pages/TopicAnalysisPage";
import SentimentAnalysisPage from "./pages/SentimentAnalysisPage";
import AdvancedAnalysisPage from "./pages/AdvancedAnalysisPage";
import ReviewsTablePage from "./pages/ReviewsTablePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Rute baru yang sudah dikelompokkan */}
          <Route path="/analisis-topik" element={<TopicAnalysisPage />} />
          <Route
            path="/analisis-sentimen"
            element={<SentimentAnalysisPage />}
          />
          <Route path="/analisis-lanjutan" element={<AdvancedAnalysisPage />} />
          <Route path="/tabel-ulasan" element={<ReviewsTablePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
