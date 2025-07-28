// src/pages/AdvancedAnalysisPage.jsx
import React from "react";

import KeyInsights from "../components/KeyInsights";
import ModelEvaluation from "../components/ModelEvaluation";
import DemoModel from "../components/DemoModel";

const AdvancedAnalysisPage = () => {
  return (
    <div className="space-y-12">
      {/* Komponen Demo Model diletakkan di paling atas */}
      <DemoModel />

      {/* Komponen Evaluasi Model */}
      <ModelEvaluation />

      {/* Komponen Key Insights */}
      <KeyInsights />
    </div>
  );
};

export default AdvancedAnalysisPage;
